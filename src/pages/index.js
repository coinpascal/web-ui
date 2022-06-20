import CsPageLayout from '../components/layouts/csPage'
import FrontPageLayout from '../components/layouts/frontPage'
export default function HomePage() {
    return(
        <>
        { process.env.NEXT_PUBLIC_SHOWCSPAGE === '1'  ? <>
        <CsPageLayout></CsPageLayout>
        </> : <>
        <FrontPageLayout>
          Home Page    
        </FrontPageLayout>
        </>}
        </>
    )
}