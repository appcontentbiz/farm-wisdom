class SpeechService {
  constructor() {
    this.synthesis = window.speechSynthesis;
    this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new this.SpeechRecognition();
    this.setupRecognition();
  }

  setupRecognition() {
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';
  }

  startListening(onResult, onError) {
    this.recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const command = event.results[last][0].transcript;
      onResult(command);
    };

    this.recognition.onerror = (event) => {
      onError(event.error);
    };

    this.recognition.start();
  }

  stopListening() {
    this.recognition.stop();
  }

  speak(text, onEnd = () => {}) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = onEnd;
    this.synthesis.speak(utterance);
  }

  cancel() {
    this.synthesis.cancel();
  }

  pause() {
    this.synthesis.pause();
  }

  resume() {
    this.synthesis.resume();
  }
}

export default new SpeechService();
