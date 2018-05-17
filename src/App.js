import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data:['product1', 'product2', 'product3'],
                  message:''
                };
  }

  addItem(e){
    e.preventDefault();
    const {data} = this.state;
    const newItem = this.newItem.value;
    const isOnTheList = data.includes(newItem);
    if (isOnTheList) {
      this.setState({message:'This product already available on the list'})
    } else {
      newItem !== '' && this.setState({
        data:[...this.state.data, newItem],
        message:''
      })
    }

    this.addForm.reset();
  }

  removeProduct(item){
    const newData= this.state.data.filter(productItem=> productItem !=item)
    this.setState({
      data:[...newData]
    })
  }
  render() {
    let message = this.state.message;
    let product = this.state.data.map(item=>
      <tr key={item}>
        <td>{item}</td>
        <td><button onClick={(e)=>this.removeProduct(item)} type="button" className="btn btn-danger btn-sm">Remove</button></td>
      </tr>
     )

    return (
      <div className="container">
        <header className="col-xs-offset-4">
          <h2>Product List</h2>
          {
            message !=='' && <p className="message text-danger">{message}</p>
          }
          <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e)=>{this.addItem(e)}}>
          <div className="form-group">
            <input ref={input => this.newItem = input} type="text" className="form-control" id="text" placeholder="Enter text" name="text"/>
          </div>
          <button type="submit" className="btn btn-info">Add</button>
          </form>
        </header>
        <table className="table table-default">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
