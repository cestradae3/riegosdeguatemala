import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"


export const DashboardApp = () => {
  return (
    <AppTheme>
      <AppRouter/>
    </AppTheme>
  )
}
