import rateLimit from 'express-rate-limit'
export const limiter = rateLimit({
  windowMs:  60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per `window` per minute
  message:{message:'Too many login attempts from this IP, please try again after 60 seconds'},
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});