import companyData from "../../../test-data/companies"

export default function page({ params }) {
    const { company_id } = params;

    const company = companyData.find((company) => String(company.company_id) === company_id); 

    if (!company) {
        return <div>Company not found.</div>;
    }

    return (
        <div>
            <h1>{company.company_name}</h1>
            <p>{company.email}</p>
        </div>
    );
};