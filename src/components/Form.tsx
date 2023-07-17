import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import axios from "axios";

interface FormValues {
    username:string
    email:string
    password:string
    phone:string
    address:string
    social: {
        instagram:string;
        facebook:string
    }
    dateBirthday:Date
}
export default function Form(){
    const form = useForm<FormValues>({
        defaultValues: async () => {
          try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            const users = response.data;
            const randomUser = users[Math.floor(Math.random() * users.length)];
            return {
              username: randomUser.username,
              email: randomUser.email,
              phone:randomUser.phone,
              address:randomUser.address.city +", "+ randomUser.address.street,
              social: {
                instagram:"",
                facebook:""
              },
              dateBirthday:new Date(),
              password: ""
            } as FormValues;
          } catch (error) {
            console.error(error);
            return {} as FormValues;
          }
        }
      });
    const {register,control,handleSubmit,formState,reset } = form
    const { errors } = formState

    const onSubmit = (data:FormValues) => {
         console.log("Form submitted",data); 
    }
    return(
        <div className="form">
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register("username",{required:{
                    value:true,
                    message:"Username is required"}
                    })}/>
                    <p className="error">{errors.username?.message}</p>
            </div>
            <div className="form-control">
                <label htmlFor="dateBirthday">Date of birth</label>
                <input type="date" id="dateBirthday" {...register("dateBirthday",{
                    valueAsDate:true,
                    required:{
                    value:true,
                    message:"Date of birth is required"}
                    })}/>
                    <p className="error">{errors.dateBirthday?.message}</p>
            </div>
            <div className="form-control">    
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email",{pattern:{
                    value:/^[a-zA-Z0-9.!#$&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message:"Invalid email format"
                },
                validate: (fieldValue) => {
                    return (
                        fieldValue !== "elgunbayramov223@gmail.com" ||
                        "Enter a different mail address"
                    )
                }
                })}/>
                <p className="error">{errors.email?.message}</p>
                </div>

                <div className="form-control">    
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" {...register("phone",{required:{
                    value:true,
                    message:"Phone Number is required"}
                    })}/>
                <p className="error">{errors.phone?.message}</p>
                </div>

                <div className="form-control">    
                <label htmlFor="address">Address</label>
                <input type="text" id="address" {...register("address",{required:{
                    value:true,
                    message:"address is required"}
                    })}/>
                <p className="error">{errors.address?.message}</p>
                </div>

                <div className="form-control">    
                <label htmlFor="instagram">Instagram</label>
                <input type="text" id="instagram" {...register("social.instagram")}/>
                </div>
                <div className="form-control">    
                <label htmlFor="facebook">Facebook</label>
                <input type="text" id="facebook" {...register("social.facebook")}/>
                </div>
               
                <div className="form-control">    
                <label htmlFor="password">Password</label>
                <input type="password" id="password"  {...register("password", {
                 minLength: 8,
                })}/>
                <p>{errors.password && <p className="error">Password should be at least 8 characters long.</p>}</p>
                </div>
                <button>Submit</button>
                <button type="button" onClick={() => reset()}>Reset</button>
            </form>
            <DevTool control={control}/>
        </div>
    )
}