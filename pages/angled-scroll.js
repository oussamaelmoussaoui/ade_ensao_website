import Layout from '../components/Layout'
import AngledSection from '../components/AngledSection'

export default function AngledScroll(){
  return (
    <Layout title="Angled Scroll Demo">
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <AngledSection bg="bg-adeBlue text-white" className="snap-start">
          <h1 className="text-4xl font-bold">Section 1</h1>
        </AngledSection>
        <AngledSection bg="bg-adeRed text-white" className="snap-start">
          <h1 className="text-4xl font-bold">Section 2</h1>
        </AngledSection>
        <AngledSection bg="bg-lightGray text-darkText" className="snap-start">
          <h1 className="text-4xl font-bold">Section 3</h1>
        </AngledSection>
      </div>
    </Layout>
  )
}
