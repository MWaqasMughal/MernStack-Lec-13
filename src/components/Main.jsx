import Card from "./Card";

function Main({products}){
    return(
      <>
      <main className=''>
      <div className='row'>
       {
          products.map(product=>{
            return(
              <div key={product.id} className='col-md-3'>
                <Card product={product}/>
              </div>
            )
          })
        }
      </div>
      </main>
      </>
    )
  }
  export default Main;