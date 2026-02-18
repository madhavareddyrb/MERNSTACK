import "./CategorySlider.css";

function CategorySlider() {
  const categories = [
    {
      img: "https://img.freepik.com/free-photo/top-view-delicious-fruit-salad-inside-plate-with-fresh-fruits-gray-tropical-fruit-tree-exotic-ripe-diet-photo_140725-109949.jpg?semt=ais_hybrid&w=740&q=80",
      category_name: "Fruits and Vegtables",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrOkDStERj4GPOfHpqO9GcxQlqNylEqqulgX0fFfaSBWCGvcJ4BHJNrWGDiS7ldCw8-ruyKdz4ykVdmjyMTqYYmUVq1pQpCGAI0gMYac1N0WSzeLKIQiCTRA",
      category_name: "Dairy Bread",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrOkDStERj4GPOfHpqO9GcxQlqNylEqqulgX0fFfaSBWCGvcJ4BHJNrWGDiS7ldCw8-ruyKdz4ykVdmjyMTqYYmUVq1pQpCGAI0gMYac1N0WSzeLKIQiCTRA",
      category_name: "Fruits and Vegtables",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrOkDStERj4GPOfHpqO9GcxQlqNylEqqulgX0fFfaSBWCGvcJ4BHJNrWGDiS7ldCw8-ruyKdz4ykVdmjyMTqYYmUVq1pQpCGAI0gMYac1N0WSzeLKIQiCTRA",
      category_name: "Fruits and Vegtables",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrOkDStERj4GPOfHpqO9GcxQlqNylEqqulgX0fFfaSBWCGvcJ4BHJNrWGDiS7ldCw8-ruyKdz4ykVdmjyMTqYYmUVq1pQpCGAI0gMYac1N0WSzeLKIQiCTRA",
      category_name: "Milk",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrOkDStERj4GPOfHpqO9GcxQlqNylEqqulgX0fFfaSBWCGvcJ4BHJNrWGDiS7ldCw8-ruyKdz4ykVdmjyMTqYYmUVq1pQpCGAI0gMYac1N0WSzeLKIQiCTRA",
      category_name: "Fruits and Vegtables",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrOkDStERj4GPOfHpqO9GcxQlqNylEqqulgX0fFfaSBWCGvcJ4BHJNrWGDiS7ldCw8-ruyKdz4ykVdmjyMTqYYmUVq1pQpCGAI0gMYac1N0WSzeLKIQiCTRA",
      category_name: "Fruits and Vegtables",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrOkDStERj4GPOfHpqO9GcxQlqNylEqqulgX0fFfaSBWCGvcJ4BHJNrWGDiS7ldCw8-ruyKdz4ykVdmjyMTqYYmUVq1pQpCGAI0gMYac1N0WSzeLKIQiCTRA",
      category_name: "Fruits and Vegtables",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrOkDStERj4GPOfHpqO9GcxQlqNylEqqulgX0fFfaSBWCGvcJ4BHJNrWGDiS7ldCw8-ruyKdz4ykVdmjyMTqYYmUVq1pQpCGAI0gMYac1N0WSzeLKIQiCTRA",
      category_name: "Milk",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrOkDStERj4GPOfHpqO9GcxQlqNylEqqulgX0fFfaSBWCGvcJ4BHJNrWGDiS7ldCw8-ruyKdz4ykVdmjyMTqYYmUVq1pQpCGAI0gMYac1N0WSzeLKIQiCTRA",
      category_name: "Fruits and Vegtables",
    },
    
  ];

  const categoryData =categories.map(function (category,index){

    
    return (
          
      <>
      <div className=" category-loop">
            <img src={category.img} alt="image" />
            <p>{category.category_name} </p>
      </div>
      </>
    );

  });


  

  return (
    <>
      <h4>Category Slider</h4>
      <div className="category-data">{categoryData}</div>
    </>
  );
}

export default CategorySlider;
