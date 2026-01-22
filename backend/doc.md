1. Backend - Role Based Access Control (RBAC)
   - RBAC - admin modal replacing with - adding role property in userModel and check admin by roleMiddleware
   - admin controller will have a different set of actions so don't remove it.

   - Model represent data.
   - Controller represent power.
   - Roles decide who gets that power.

   - admin route - role('admin');
   - pro route - role('pro', 'admin');