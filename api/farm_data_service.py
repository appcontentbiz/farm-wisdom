import random
import time
from datetime import datetime
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Optional

app = FastAPI()

class FarmDataService:
    def __init__(self):
        self.soil_data_history = []
        self.crop_data_history = []
        self.ph_history = []
        self.pollen_history = []
        self.weather_history = []
        
    def get_soil_data(self) -> Dict:
        data = {
            'timestamp': datetime.now().isoformat(),
            'moisture': round(random.uniform(0.1, 0.4), 2),
            'temperature': round(random.uniform(10.0, 30.0), 1),
            'nitrogen': round(random.uniform(0.5, 2.0), 2),
            'phosphorus': round(random.uniform(0.3, 1.5), 2),
            'potassium': round(random.uniform(0.4, 1.8), 2)
        }
        self.soil_data_history.append(data)
        if len(self.soil_data_history) > 100:  # Keep last 100 readings
            self.soil_data_history.pop(0)
        return data

    def get_weather_data(self, lat: float, lon: float) -> Dict:
        conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Heavy Rain', 'Thunderstorm']
        wind_directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
        
        data = {
            'timestamp': datetime.now().isoformat(),
            'temperature': round(random.uniform(5.0, 35.0), 1),
            'humidity': round(random.uniform(20.0, 90.0), 1),
            'precipitation': round(random.uniform(0, 20), 1),
            'wind_speed': round(random.uniform(0, 30), 1),
            'wind_direction': random.choice(wind_directions),
            'condition': random.choice(conditions),
            'pressure': round(random.uniform(980, 1020), 1),
            'uv_index': round(random.uniform(0, 11), 1)
        }
        self.weather_history.append(data)
        if len(self.weather_history) > 100:
            self.weather_history.pop(0)
        return data

    def get_farm_markets(self, lat: float, lon: float) -> List[Dict]:
        markets = []
        for i in range(random.randint(3, 6)):
            market = {
                'id': f"market_{i}",
                'name': f"Local Farm Market {i + 1}",
                'address': f"{random.randint(100, 999)} Farm Road",
                'lat': round(lat + random.uniform(-0.05, 0.05), 4),
                'lon': round(lon + random.uniform(-0.05, 0.05), 4),
                'products': random.sample([
                    'Vegetables', 'Fruits', 'Dairy', 'Eggs', 
                    'Honey', 'Herbs', 'Flowers', 'Meat'
                ], random.randint(3, 6)),
                'hours': '8:00 AM - 6:00 PM',
                'distance': round(random.uniform(0.5, 15.0), 1)
            }
            markets.append(market)
        return sorted(markets, key=lambda x: x['distance'])

    def get_free_resources(self, lat: float, lon: float) -> Dict:
        resources = {
            'soil': [],
            'mulch': [],
            'compost': []
        }
        
        for resource_type in resources.keys():
            for i in range(random.randint(1, 3)):
                offer = {
                    'id': f"{resource_type}_{i}",
                    'type': resource_type,
                    'provider': f"Community Garden {i + 1}",
                    'location': f"{random.randint(100, 999)} Garden Street",
                    'lat': round(lat + random.uniform(-0.05, 0.05), 4),
                    'lon': round(lon + random.uniform(-0.05, 0.05), 4),
                    'quantity': f"{random.randint(50, 1000)} kg",
                    'available_until': (datetime.now().date() + 
                                     timedelta(days=random.randint(1, 14))).isoformat(),
                    'contact': f"555-0{random.randint(100, 999)}",
                    'distance': round(random.uniform(0.5, 10.0), 1)
                }
                resources[resource_type].append(offer)
            
            resources[resource_type] = sorted(resources[resource_type], 
                                           key=lambda x: x['distance'])
        
        return resources

farm_service = FarmDataService()

@app.get("/api/soil-data")
async def get_soil_data():
    return farm_service.get_soil_data()

@app.get("/api/weather")
async def get_weather(lat: float, lon: float):
    return farm_service.get_weather_data(lat, lon)

@app.get("/api/farm-markets")
async def get_farm_markets(lat: float, lon: float):
    return farm_service.get_farm_markets(lat, lon)

@app.get("/api/free-resources")
async def get_free_resources(lat: float, lon: float):
    return farm_service.get_free_resources(lat, lon)
