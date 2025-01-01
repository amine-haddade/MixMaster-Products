function AllCategoryButton(props) {
  const listCategory = props.category.map((item, index) => {
    return (
      <button key={index}  onClick={()=>{props.filtecate(item)}} className="btn-category">
        {item}
      </button>
    );
  });

  return (
    <div className="btns-cate">
        {listCategory}
    </div>
    );
}

export default AllCategoryButton;
