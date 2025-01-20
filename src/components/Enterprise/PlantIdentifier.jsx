import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@mui/material';
import { Camera, PhotoLibrary, Close } from '@mui/icons-material';
import { plantRecognitionService, enhancedPlantService } from '../../services/enterprise';

const PlantIdentifier = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef();
  const videoRef = useRef();
  const [showCamera, setShowCamera] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        setLoading(true);
        setError(null);
        const reader = new FileReader();
        reader.onloadend = async () => {
          setImage(reader.result);
          await identifyPlant(file);
        };
        reader.readAsDataURL(file);
      } catch (err) {
        setError('Error processing image');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setShowCamera(true);
    } catch (err) {
      setError('Error accessing camera');
      console.error(err);
    }
  };

  const captureImage = async () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    
    canvas.toBlob(async (blob) => {
      setImage(URL.createObjectURL(blob));
      await identifyPlant(blob);
      stopCamera();
    }, 'image/jpeg');
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setShowCamera(false);
  };

  const identifyPlant = async (imageData) => {
    try {
      setLoading(true);
      setError(null);
      
      // Run all analyses in parallel
      const [
        identificationResponse,
        diseaseResponse,
        growthResponse,
        harvestResponse
      ] = await Promise.all([
        plantRecognitionService.identifyPlant(imageData),
        enhancedPlantService.detectDisease(imageData),
        enhancedPlantService.analyzeGrowthStage(imageData),
        enhancedPlantService.predictHarvestTime(imageData)
      ]);

      // Get treatment plan if disease is detected
      let treatmentPlan = null;
      if (diseaseResponse.data.diseaseDetected) {
        treatmentPlan = await enhancedPlantService.getTreatmentPlan(
          diseaseResponse.data.diseaseId
        );
      }

      // Get organic treatment options if disease is detected
      let organicTreatments = null;
      if (diseaseResponse.data.diseaseDetected) {
        organicTreatments = await enhancedPlantService.getOrganicTreatments(
          diseaseResponse.data.diseaseId
        );
      }

      // Get nutritional needs based on growth stage
      const nutritionalNeeds = await enhancedPlantService.getNutritionalNeeds(
        identificationResponse.data.plantId
      );

      setResults({
        ...identificationResponse.data,
        diseaseAnalysis: diseaseResponse.data,
        growthStage: growthResponse.data,
        harvestPrediction: harvestResponse.data,
        treatmentPlan: treatmentPlan?.data,
        organicTreatments: organicTreatments?.data,
        nutritionalNeeds: nutritionalNeeds.data
      });
    } catch (err) {
      setError('Error analyzing plant');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Plant Identifier
          </Typography>
          
          {!showCamera && (
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
              <Button
                variant="contained"
                startIcon={<Camera />}
                onClick={startCamera}
              >
                Take Photo
              </Button>
              <Button
                variant="contained"
                startIcon={<PhotoLibrary />}
                onClick={() => fileInputRef.current.click()}
              >
                Upload Photo
              </Button>
              <input
                type="file"
                accept="image/*"
                hidden
                ref={fileInputRef}
                onChange={handleFileUpload}
              />
            </Box>
          )}

          {showCamera && (
            <Box sx={{ position: 'relative' }}>
              <video
                ref={videoRef}
                autoPlay
                style={{ width: '100%', borderRadius: 8 }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                <Button variant="contained" onClick={captureImage}>
                  Capture
                </Button>
                <Button variant="outlined" onClick={stopCamera}>
                  Cancel
                </Button>
              </Box>
            </Box>
          )}

          {image && !showCamera && (
            <Box sx={{ position: 'relative', mt: 2 }}>
              <img
                src={image}
                alt="Selected plant"
                style={{ width: '100%', borderRadius: 8 }}
              />
              <IconButton
                sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'background.paper' }}
                onClick={() => {
                  setImage(null);
                  setResults(null);
                }}
              >
                <Close />
              </IconButton>
            </Box>
          )}

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <CircularProgress />
            </Box>
          )}

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          {results && (
            <Paper sx={{ mt: 2, p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Analysis Results
              </Typography>
              
              {/* Plant Identification */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  Plant Identification
                </Typography>
                <Typography>
                  Identified as: {results.name}
                  {results.confidence && ` (${(results.confidence * 100).toFixed(1)}% confidence)`}
                </Typography>
              </Box>

              {/* Disease Detection */}
              {results.diseaseAnalysis && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Health Assessment
                  </Typography>
                  {results.diseaseAnalysis.diseaseDetected ? (
                    <>
                      <Typography color="error">
                        Issue Detected: {results.diseaseAnalysis.diseaseName}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Severity: {results.diseaseAnalysis.severity}
                      </Typography>
                      {results.treatmentPlan && (
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="subtitle2">Recommended Treatment:</Typography>
                          <ul>
                            {results.treatmentPlan.steps.map((step, index) => (
                              <li key={index}>{step}</li>
                            ))}
                          </ul>
                        </Box>
                      )}
                      {results.organicTreatments && (
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="subtitle2">Organic Solutions:</Typography>
                          <ul>
                            {results.organicTreatments.map((treatment, index) => (
                              <li key={index}>{treatment}</li>
                            ))}
                          </ul>
                        </Box>
                      )}
                    </>
                  ) : (
                    <Typography color="success.main">
                      No diseases detected. Plant appears healthy.
                    </Typography>
                  )}
                </Box>
              )}

              {/* Growth Stage */}
              {results.growthStage && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Growth Analysis
                  </Typography>
                  <Typography>
                    Current Stage: {results.growthStage.currentStage}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Progress: {results.growthStage.progressPercentage}% through current stage
                  </Typography>
                  {results.nutritionalNeeds && (
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="subtitle2">Current Nutritional Needs:</Typography>
                      <ul>
                        {Object.entries(results.nutritionalNeeds).map(([nutrient, amount]) => (
                          <li key={nutrient}>
                            {nutrient}: {amount}
                          </li>
                        ))}
                      </ul>
                    </Box>
                  )}
                </Box>
              )}

              {/* Harvest Prediction */}
              {results.harvestPrediction && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Harvest Forecast
                  </Typography>
                  <Typography>
                    Estimated Harvest: {new Date(results.harvestPrediction.estimatedDate).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Optimal Conditions:
                  </Typography>
                  <ul>
                    {results.harvestPrediction.optimalConditions.map((condition, index) => (
                      <li key={index}>{condition}</li>
                    ))}
                  </ul>
                </Box>
              )}
            </Paper>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default PlantIdentifier;
