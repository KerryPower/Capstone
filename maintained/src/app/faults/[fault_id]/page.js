import faultData from "../../../test-data/faults";
import FaultsManager from "@/components/Fault/FaultCardFull";

export default function Page({ params }) {
    const { fault_id } = params;

    const fault = faultData.find((fault) => String(fault.fault_id) === fault_id);

    if (!fault) {
        return <div>Fault not found.</div>;
    }

    return (
        <FaultsManager fault={fault} faultsData={faultData} />
    );
}
