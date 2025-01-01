
function Menu({list}) {
  return (
    <div className="main-Menu">
       <div className="menu">
        { list.map((ele,i)=>{
            return(
                <div className="menu-item" key={i}>
                    <img src={ele.img} alt="Buttermilk Pancakes" />
                    <div className="item-info">
                        <div className="item-header">
                            <span className="item-title">{ele.title}</span>
                            <span className="item-price">{ele.price}$</span>
                        </div>
                        <p className="item-description">{ele.desc}</p>
                    </div>
                </div>
            )
        })}
            
            
          
        </div>
    </div>
  )
}

export default Menu
