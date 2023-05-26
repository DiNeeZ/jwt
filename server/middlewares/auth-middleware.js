import tokenService from '../service/token-service.js';
import ApiError from '../exeptions/api-error.js';

const authMiddleware = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      next(ApiError.UnauthorizedError());
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      next(ApiError.UnauthorizedError());
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      next(ApiError.UnauthorizedError());
    }

    req.user = userData;
    next();
  } catch (error) {
    next(ApiError.UnauthorizedError());
  }
};

export default authMiddleware;
