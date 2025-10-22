import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Insert feedback into database
    await sql`
      INSERT INTO segment_feedback (
        submitted_at,
        respondent_name,
        q1_response,
        q2_response,
        q3_response,
        cjpt_keep,
        cjpt_changes,
        cjpt_scores,
        cjpt_other,
        aplt_keep,
        aplt_why,
        aplt_change,
        aplt_other,
        cck_direction,
        cck_multi_thoughts,
        cck_agency_thoughts,
        cck_other,
        kw_keep,
        kw_builders,
        kw_validate,
        kw_other,
        ppm_keep,
        ppm_interview,
        ppm_other,
        ainsto_add,
        ainsto_description,
        ainsto_priority,
        ainsto_priority_reasoning,
        ainsto_concerns,
        q4_response,
        q5_response,
        confidence,
        q6_increase,
        q6_interviews,
        q6_next_steps,
        q6_feedback
      ) VALUES (
        ${data.submittedAt},
        ${data.respondentName},
        ${data.q1Response},
        ${data.q2Response},
        ${data.q3Response},
        ${data.cjptKeep},
        ${data.cjptChanges},
        ${data.cjptScores},
        ${data.cjptOther},
        ${data.apltKeep},
        ${data.apltWhy},
        ${data.apltChange},
        ${data.apltOther},
        ${data.cckDirection},
        ${data.cckMultiThoughts},
        ${data.cckAgencyThoughts},
        ${data.cckOther},
        ${data.kwKeep},
        ${data.kwBuilders},
        ${data.kwValidate},
        ${data.kwOther},
        ${data.ppmKeep},
        ${data.ppmInterview},
        ${data.ppmOther},
        ${data.ainstoAdd},
        ${data.ainstoDescription},
        ${data.ainstoPriority},
        ${data.ainstoPriorityReasoning},
        ${data.ainstoConcerns},
        ${data.q4Response},
        ${data.q5Response},
        ${data.confidence},
        ${data.q6Increase},
        ${data.q6Interviews},
        ${data.q6NextSteps},
        ${data.q6Feedback}
      )
    `;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error saving feedback:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save feedback" },
      { status: 500 }
    );
  }
}
