import Form from "@/components/Form";
import Contacts from "@/components/Contacts";
export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-1 p-2">
      <Form/>
      <Contacts/>
    </div>
    </>
  );
}
