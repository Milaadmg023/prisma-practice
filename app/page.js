import Form from "@/components/Form";
import Contacts from "@/components/Contacts";
export default function Home() {
  return (
    <>
    <div className="grid grid-cols-1 gap-1 p-2 lg:grid-cols-2">
      <Form/>
      <Contacts/>
    </div>
    </>
  );
}
