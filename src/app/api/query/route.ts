import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// @ts-ignore
export async function POST(req) {
  const { usertext } = await req.json();

  const openAIPrompt = `
    Generate an Overpass API query for OpenStreetMap based on the term: "${usertext}".
    Ensure the query uses the following syntax:
    [out:json][timeout:45];
    way["<filter>"]({{bbox}});
    out geom;
    
    Replace "<filter>" with an appropriate key-value pair based on the term, and ensure "{{bbox}}" is a placeholder for the bounding box.

    Respond with:
    query_name= {ONE_TWO_WORD_NAME_FOR_QUERY} ||| data=[out:json][timeout:45];way["<filter>"]({{bbox}});out geom;
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: openAIPrompt },
      ],
    });

    const content = completion.choices[0].message.content;
    console.log("AI Response Content:", content);

  // Extract the query name and data from the response
  // @ts-ignore
  const queryData = content.split("|||");
    const queryName = queryData[0]?.replace("query_name=", "").trim();
    const data = queryData[1]?.replace("data=", "").trim();

    // Log the final query for debugging
    console.log("Final OSM Query:", data);

    return new Response(
      JSON.stringify({
        osmquery: data,
        query_name: queryName,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error generating completion:", error);

    return new Response(
      JSON.stringify({
  // @ts-ignore
  message: error.message || "An error occurred",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
