

const CategoryCard = (cate) => {
  const sub_cats = cate?.cate?.sub_category;
  console.log(cate);
 
  return (
    <>
    {
      // cate.sub_category
      sub_cats?.map(sub=> <div key={sub.id}>
        <h2>{sub?.category_name}</h2>
      </div>)
    }
    
    </>
  );
};

export default CategoryCard;