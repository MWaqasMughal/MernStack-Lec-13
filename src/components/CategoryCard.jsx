function CategoryCard({ categories }) {
    return (
        <div className="row mb-5">
            {
                categories.map(category => {
                    return (
                        <div className="col-md-2">
                            <img src={category.image} class="img-thumbnail" alt="..."></img>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default CategoryCard