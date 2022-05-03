import FrontPageLayout from '../components/layouts/frontPage'
import { useAuth } from '../libs/auth'
export default function HomePage() {
  const user = useAuth({middleware:'guest'})
    return(
        <>
        <FrontPageLayout>
          Home Page    
        </FrontPageLayout>
        </>
    )
}