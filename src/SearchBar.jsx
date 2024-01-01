
function SearchBar({check,onCheck,search,onSearch}) {

    const handleCheck=(e)=>{
        onCheck(c=>!c)
    }
    
    const handleSearch=(e)=>{
        onSearch(e.target.value)
    }

    return (
        <>
            <div className="container-lg mt-3">
                <div className="row">
                    <div className="col-5">
                        <input type="text" name="search" id="" placeholder="Rechercher" className="form-control" value={search} onChange={handleSearch} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group mt-2">
                            <input type="checkbox" name="checkbox" id="checkbox" className="form-check-input" checked={check} onChange={handleCheck} />
                            <label htmlFor="" className="form-check-label">N'affichez que les produits en stock</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar