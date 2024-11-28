import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const {_id,name,quantity,supplier,taste,category,detail,photo} = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = (e.target)
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const detail = form.detail.value;
        const photo = form.photo.value;

        const updatedCoffee = {name,quantity,supplier,taste,category,detail,photo}
        console.log(updatedCoffee)

        // send data to the server 
       fetch(`http://localhost:3000/coffee/${_id}`, {
           method: "PUT",
           headers:{
               "content-type" : "application/json"
           },
           body: JSON.stringify(updatedCoffee)

       })
       .then(res => res.json())
       .then(data =>
            {console.log(data)
               if(data.modifiedCount>0){
                   Swal.fire({
                       title: 'success!',
                       text: 'Coffee Updated successfully',
                       icon: 'success',
                       confirmButtonText: 'Cool'
                     })
               }

       })
   }
  

    return (

        <div>
           <h2 className="text-center mt-12 text-3xl font-bold">Update Coffee : {name}</h2> 
           <form onSubmit={handleUpdateCoffee}> 
            <div className="text-center mt-20 bg-[#F4F3F0]  w-10/12 mx-auto p-20">
           
           {/* name and quantity row */}
            <div className="md:flex justify- between gap-5">
                <div className="md:w-1/2">
                      <input className="border text-center rounded-lg py-3 w-full  mt-4" type="text" name="name" id="" defaultValue={name} placeholder="Coffee name" />
                </div>
        
                <div className="md:w-1/2">
                      <input className="border text-center w-full rounded-lg py-3  mt-4" type="text" name="quantity" id="" defaultValue={quantity} placeholder="Available Quantity " />
                </div>
           </div>    
                 
                 {/* suplier name and Taste row */}
            <div className="md:flex justify- between gap-5">
                <div className="md:w-1/2" >
                     <input className="border text-center rounded-lg py-3 w-full  mt-4" type="text" name="supplier" id="" defaultValue={supplier} placeholder="Supplier name" />
                </div>
                <div className="md:w-1/2">
                      <input className="border text-center w-full rounded-lg py-3  mt-4" type="text" name="taste" id="" defaultValue={taste} placeholder="Taste" />
                 </div>
           </div>  
             
             {/* category and details row */}
            <div className="md:flex justify- between gap-5">
                <div className="md:w-1/2">
                     <input className="border w-full text-center rounded-lg py-3  mt-4" type="text" name="category" id="" defaultValue={category} placeholder="Category name" />
                </div>
                <div className="md:w-1/2" >
                      <input className="border text-center rounded-lg py-3 w-full  mt-4" type="text" name="detail" id="" defaultValue={detail} placeholder="Detail" />
                 </div>
           </div>  


           {/* photo url  */}

            <div className="">
                <div >
                     <input className="border w-full text-center rounded-lg py-3  mt-4" type="text" name="photo" id="" defaultValue={photo} placeholder="Photo Url" />
                </div>
                
           </div> 

                       <input type="submit" value="Update Coffee" className="btn btn-block mt-4 font-bold bg-[#edc345]" />
        
            </div>

           </form>
        </div>
        
    );
};

export default UpdateCoffee;