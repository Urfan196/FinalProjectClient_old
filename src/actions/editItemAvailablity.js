const editItemAvailablity = (e, item) => {
    e.preventDefault();

    return (dispatch) => {
        return fetch(`http://localhost:3000/items/${item.id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                available: !item.available
            })
        })
        .then(resp => resp.json())
        .then(item => {
            dispatch({type: 'CHANGE_ITEM_AVAILABILITY', item: item})
        })
    }
}

export default editItemAvailablity;

