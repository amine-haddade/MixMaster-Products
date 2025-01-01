import SerchProvider from "../../_provider/Serch";
import Products from "./Products"
function Home() {
  return (

    <div>
      <SerchProvider>
          <Products/>
      </SerchProvider>
    </div>
  )
}

export default Home
