import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/auth.service";

export const AuthGuard = async () => {
    const auth = inject(AuthenticationService);
    const router = inject(Router);
  
    if (!auth.getIsAuthenticated()) {
      try {
        const response = await auth.refreshToken();
        
        if (response) {
          return true;
        } else {
          router.navigateByUrl('/public');
          return false;
        }
      } catch (error) {
        console.error('Error refreshing token:', error);
        router.navigateByUrl('/public');
        return false;
      }
    } else {
      return true;
    }
  };

  