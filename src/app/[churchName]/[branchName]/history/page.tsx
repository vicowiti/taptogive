import { PageProps } from "../../../../../.next/types/app/layout"
import LoggedLayout from "../../components/LoggedUser"


const page = ({params}:PageProps) => {
  return (
    <LoggedLayout churchName={params.churchName} branchName={params.branchName}>
      <div>history</div>
    </LoggedLayout>
  );
}

export default page