// app/unit/[unitId]/page.js
"use client"

import unitData from "../../../test-data/units"

export default function page({ params }) {
    const { unit_id } = params;

    const unit = unitData.find((unit) => String(unit.unit_id) == unit_id);

    if (!unit) {
        return <div>Unit not found.</div>;
    }

    return (
        <div>
            <h1>{unit.make}</h1>
            <p>{unit.model}</p>
        </div>
    );
};
