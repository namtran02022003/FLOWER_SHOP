import { useForm } from 'react-hook-form'
import "./Cart.css"
export default function FoemCartValue({data}) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (value)=>{
    
       const DATACART = {
        userid:data.userid,
        cartsUser:data.carts,
        value:value
       }
       console.log(DATACART)
    }
    return (
        <div>
            <h4>vui lòng điền đầy đủ thông tin trước khi thanh toán</h4>
            <form className='mt-3 login' onSubmit={handleSubmit(onSubmit)}>
                <div className='my-2'>
                    <label>Họ và tên:</label>
                    <input {...register('fullName',{
                        minLength:9,
                        required:true
                    })}/>
                </div>
                <div className='my-2'>
                    <label>Số điện thoại:</label>
                    <input {...register('phoneNumber',{
                        minLength:10,
                        required:true,
                    })} />
                </div>
                <div className='my-2'>
                    <label>Địa chỉ:</label>
                    <input {...register('address',{
                        required:true,
                        minLength:15
                    })} />
                </div>
                <div className='my-2'>
                    <label>Ghi chú thêm:</label>
                    <textarea {...register('note',{
                        required:true
                    })} className='login_textarea'/>
                </div>
                <button className='btn btn_thanhtoan btn-dark' type='submit'>thanh toan</button>
            </form>
        </div>
    )
}