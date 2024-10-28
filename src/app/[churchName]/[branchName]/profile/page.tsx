import Input from "@/components/Input";
import { PageProps } from "../../../../../.next/types/app/layout";
import LoggedLayout from "../../components/LoggedUser";
import { IoIosArrowForward } from "react-icons/io";

const page = ({params}:PageProps) => {
  return (
    <LoggedLayout churchName={params.churchName} branchName={params.branchName}>
      <div>
        <article className="flex justify-center items-center">
            <div className="w-32 h-32 border rounded-full my-3 bg-green-200"></div>
        </article>

        <article>
            <Input label="Name" placeholder="Victor Owiti"  type="text" name="name"/>
             <Input label="Email" placeholder="viowiti12@gmail.com" type="email" name="email"/>
              <Input label="Phone Number" placeholder="0706770684" type="text" name="phone"/>
               <Input label="Residence" placeholder="Ngong Road" type="text" name="residence"/>
        </article>

        <article className="my-3">
    <h6 className="font-bold flex justify-between items-center">Payment Details <IoIosArrowForward/></h6>
            <section className="p-3 border rounded-lg mt-3 mx-5">
                <article>
                    <h5>Mpesa</h5>
                    <Input label="Phone Number" placeholder="0706770684" type="text" name="phone"/>
                </article>
                <article>
                    <h5>Bank Transfer</h5>
                    <Input label="Account Number" placeholder="01117659998776" type="text" name="account"/>
                    <Input label="Bank Name" placeholder="Equity Bank" type="text" name="bank"/>
                     <Input label="Card Number" placeholder="01117659998776" type="text" name="account"/>
                </article>

            </section>
        </article>

        <button className="p-2 font-bold mt-2 w-full bg-green-600 text-white rounded-lg">Update</button>

      </div>
    </LoggedLayout>
  );
};

export default page;
