import FaultCard from "@/components/Fault/FaultCardCondensed"
const faultData = {
  title: "test",
  description: "test fault list",
  serial_number: "test1234",
  make: "test",
  model: "case",
  severity: "urgent",
  image: "example.url"
};

export default function page() {
  return (
  
  <>
    <p>hello</p>
    <FaultCard fault={faultData} />
  </>

  )

}