import { useField } from "formik"


export default function TextInput(props){
    const [field,meta]=useField(props)

    return(
        <>
        
            <input {...field} {...props}>
            </input>
            {meta.touched && meta.error ? (
                <p className="error"> {meta.error}</p>
            ): <p className="error"> </p>}
        </> 
    )
}