// Mock email service for development
class EmailService {
  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
    console.log('Email Service running in development mode - emails will be logged to console');
  }

  async sendPasswordResetEmail(email, resetToken) {
    const resetLink = `${process.env.REACT_APP_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;
    
    const emailContent = {
      to: email,
      from: 'noreply@farm-wisdom.com',
      subject: 'Reset Your Farm Wisdom Password',
      text: `Click this link to reset your password: ${resetLink}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c5282;">Reset Your Farm Wisdom Password</h2>
          <p>Hello,</p>
          <p>We received a request to reset your password. If you didn't make this request, you can safely ignore this email.</p>
          <p>To reset your password, click the button below:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetLink}" 
               style="background-color: #4299e1; 
                      color: white; 
                      padding: 12px 24px; 
                      text-decoration: none; 
                      border-radius: 4px;
                      display: inline-block;">
              Reset Password
            </a>
          </div>
          <p>Or copy and paste this link in your browser:</p>
          <p style="word-break: break-all; color: #4299e1;">${resetLink}</p>
          <p>This link will expire in 1 hour for security reasons.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #718096; font-size: 0.875rem;">
            If you didn't request this password reset, please ignore this email or contact support if you have concerns.
          </p>
        </div>
      `
    };

    // In development, just log the email
    console.log('=================== PASSWORD RESET EMAIL ===================');
    console.log('To:', email);
    console.log('Reset Link:', resetLink);
    console.log('Reset Token:', resetToken);
    console.log('========================================================');

    return true;
  }

  async sendWelcomeEmail(email, name) {
    const dashboardLink = `${process.env.REACT_APP_URL || 'http://localhost:3000'}/dashboard`;

    const emailContent = {
      to: email,
      from: 'noreply@farm-wisdom.com',
      subject: 'Welcome to Farm Wisdom!',
      text: `Welcome to Farm Wisdom, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c5282;">Welcome to Farm Wisdom!</h2>
          <p>Hello ${name},</p>
          <p>Thank you for joining Farm Wisdom! We're excited to have you as part of our farming community.</p>
          <p>Here are some things you can do to get started:</p>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin: 10px 0;">📊 Set up your farm dashboard</li>
            <li style="margin: 10px 0;">🌤️ Check local weather forecasts</li>
            <li style="margin: 10px 0;">📈 Monitor market prices</li>
            <li style="margin: 10px 0;">👥 Connect with other farmers</li>
          </ul>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${dashboardLink}" 
               style="background-color: #4299e1; 
                      color: white; 
                      padding: 12px 24px; 
                      text-decoration: none; 
                      border-radius: 4px;
                      display: inline-block;">
              Go to Dashboard
            </a>
          </div>
          <p>If you have any questions, feel free to reach out to our support team.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #718096; font-size: 0.875rem;">
            Happy Farming!<br>
            The Farm Wisdom Team
          </p>
        </div>
      `
    };

    // In development, just log the email
    console.log('=================== WELCOME EMAIL ===================');
    console.log('To:', email);
    console.log('Name:', name);
    console.log('Dashboard Link:', dashboardLink);
    console.log('====================================================');

    return true;
  }
}

export default new EmailService();
