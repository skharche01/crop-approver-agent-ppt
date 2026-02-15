import { useState } from "react";

const slides = [
  // SLIDE 1: Title
  {
    title: "",
    content: (
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",textAlign:"center",gap:24}}>
        <div style={{fontSize:16,letterSpacing:4,color:"#a3e635",textTransform:"uppercase",fontWeight:600}}>Arena Club Agentic AI Hackathon — Final Submission</div>
        <div style={{fontSize:48,fontWeight:800,lineHeight:1.15}}>Crop Approver Agent</div>
        <div style={{fontSize:22,color:"#a3e635",fontWeight:600}}>AI-Powered Crop Approval System + Custom MCP Server</div>
        <div style={{marginTop:20,fontSize:26,fontWeight:700,color:"#e2e8f0"}}>Sumit Kharche</div>
        <div style={{fontSize:16,color:"#64748b"}}>February 2026</div>
      </div>
    )
  },
  // SLIDE 2: What I Set Out to Build
  {
    title: "What I Set Out to Build",
    content: (
      <div style={{display:"flex",flexDirection:"column",gap:20,height:"100%",justifyContent:"center"}}>
        <div style={{background:"#1e293b",borderRadius:14,padding:"20px 24px",maxWidth:620,margin:"0 auto",border:"1px solid #f87171",width:"100%"}}>
          <div style={{fontSize:18,fontWeight:700,color:"#f87171",marginBottom:10}}>The Problem</div>
          <div style={{fontSize:15,color:"#cbd5e1",lineHeight:1.7}}>
            Crop approvals at Arena Club were <strong>backlogged and slowing down the entire grading pipeline</strong>. Every time a grader cropped a card image, a human reviewer had to manually check and approve it — creating a bottleneck that delayed card processing at scale.
          </div>
        </div>
        <div style={{background:"#1e293b",borderRadius:14,padding:"20px 24px",maxWidth:620,margin:"0 auto",border:"1px solid #f59e0b",width:"100%"}}>
          <div style={{fontSize:18,fontWeight:700,color:"#f59e0b",marginBottom:10}}>My Goal</div>
          <div style={{fontSize:15,color:"#cbd5e1",lineHeight:1.7}}>
            Build an AI-powered agent that can <strong>automatically evaluate and approve card crop tasks</strong> — eliminating the manual bottleneck and accelerating the grading pipeline.
          </div>
        </div>
        <div style={{background:"#1e293b",borderRadius:14,padding:"20px 24px",maxWidth:620,margin:"0 auto",border:"2px solid #a3e635",width:"100%"}}>
          <div style={{fontSize:18,fontWeight:700,color:"#a3e635",marginBottom:12}}>What I Actually Built</div>
          <div style={{display:"flex",alignItems:"flex-start",gap:12,marginBottom:10}}>
            <span style={{fontSize:20,flexShrink:0}}>🤖</span>
            <div>
              <div style={{fontSize:15,fontWeight:700,color:"#3b82f6"}}>crop-approver-agent</div>
              <div style={{fontSize:14,color:"#94a3b8",lineHeight:1.5}}>An Express.js API that orchestrates authentication, data retrieval, AI-powered decision-making (Claude Sonnet 4), and auto-approval</div>
            </div>
          </div>
          <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
            <span style={{fontSize:20,flexShrink:0}}>🔧</span>
            <div>
              <div style={{fontSize:15,fontWeight:700,color:"#a855f7"}}>crop-approver-mcps</div>
              <div style={{fontSize:14,color:"#94a3b8",lineHeight:1.5}}>A brand-new MCP server exposing Arena Club's crop approval APIs as standardized, reusable tools via Streamable HTTP</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  // SLIDE 3: Before/After Documentation
  {
    title: "Before/After Documentation with Explanations",
    content: (
      <div style={{display:"flex",flexDirection:"column",gap:14,height:"100%",justifyContent:"center"}}>
        <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
          <div style={{background:"#1e293b",borderRadius:14,padding:20,flex:1,minWidth:260,border:"1px solid #f87171"}}>
            <div style={{fontSize:16,fontWeight:700,color:"#f87171",marginBottom:12,textAlign:"center"}}>BEFORE — Manual Process</div>
            <div style={{fontSize:14,color:"#cbd5e1",lineHeight:2}}>
              <div>1. Grader crops card image</div>
              <div style={{color:"#f87171"}}>2. ⏳ Crop sits in approval queue — backlog builds</div>
              <div>3. Human reviewer manually inspects crop</div>
              <div>4. Reviewer approves or rejects</div>
              <div>5. Card moves to next grading stage</div>
            </div>
            <div style={{marginTop:12,fontSize:13,color:"#f87171",background:"#f8717112",borderRadius:8,padding:"8px 12px",lineHeight:1.6}}>
              <strong>Pain points:</strong> Human bottleneck, growing backlog, simple crops still need manual review, pipeline slowed downstream
            </div>
          </div>
          <div style={{background:"#1e293b",borderRadius:14,padding:20,flex:1,minWidth:260,border:"2px solid #a3e635"}}>
            <div style={{fontSize:16,fontWeight:700,color:"#a3e635",marginBottom:12,textAlign:"center"}}>AFTER — AI Agent</div>
            <div style={{fontSize:14,color:"#cbd5e1",lineHeight:2}}>
              <div>1. <code style={{color:"#38bdf8"}}>POST /crop-approver</code> {`{cardId, side}`}</div>
              <div>2. MCP: <code style={{color:"#a3e635"}}>authenticate</code> → SuperTokens</div>
              <div>3. MCP: <code style={{color:"#a3e635"}}>get_card_data</code> → Arena Club API</div>
              <div>4. Claude Sonnet 4 evaluates → decision</div>
              <div>5. MCP: <code style={{color:"#a3e635"}}>approve_crop</code> → auto-approved ✅</div>
            </div>
            <div style={{marginTop:12,fontSize:13,color:"#a3e635",background:"#a3e63512",borderRadius:8,padding:"8px 12px",lineHeight:1.6}}>
              <strong>Result:</strong> High-confidence crops approved instantly, only edge cases go to human review, MCP tools reusable
            </div>
          </div>
        </div>
        <div style={{background:"#1e293b",borderRadius:12,padding:"14px 20px",border:"1px solid #334155"}}>
          <div style={{fontSize:15,fontWeight:700,color:"#a855f7",marginBottom:10}}>GitHub Repository & Documentation</div>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
            <span style={{fontSize:18}}>📦</span>
            <code style={{fontSize:14,color:"#38bdf8",wordBreak:"break-all"}}>https://github.com/arenaclub/crop-approver-agent</code>
          </div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            {["ARCHITECTURE.md","ARCHITECTURE-DIAGRAMS.md","README.md","CLAUDE.md","Dockerfiles","MCP Tool Schemas"].map(f=>(
              <span key={f} style={{fontSize:12,background:"#0f172a",borderRadius:8,padding:"5px 14px",color:"#94a3b8",border:"1px solid #334155"}}>{f}</span>
            ))}
          </div>
        </div>
      </div>
    )
  },
  // SLIDE 4: Prompts Used
  {
    title: "Prompts & Approach — How I Built It",
    content: (
      <div style={{display:"flex",flexDirection:"column",gap:10,height:"100%",justifyContent:"center"}}>
        <div style={{fontSize:14,color:"#94a3b8",textAlign:"center"}}>These are the actual prompts I used at each stage to build the system with Claude's help.</div>
        <div style={{display:"flex",flexDirection:"column",gap:10,flex:1,overflow:"auto",paddingBottom:8}}>
          <div style={{background:"#1e293b",borderRadius:10,padding:"12px 16px",border:"1px solid #a855f740"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:11,background:"#a855f722",color:"#a855f7",padding:"3px 10px",borderRadius:4,fontWeight:700}}>PROMPT 1</span>
              <span style={{fontSize:14,fontWeight:700,color:"#a855f7"}}>Building the MCP Server</span>
            </div>
            <div style={{background:"#0f172a",borderRadius:8,padding:10,fontFamily:"monospace",fontSize:12,color:"#94a3b8",lineHeight:1.6,whiteSpace:"pre-wrap"}}>
{`Create a comprehensive TypeScript-based MCP server for card crop approver agent.
- Language: TypeScript
- Tools: 1. Secure Authentication Tool  2. Card Data Retrieval Tool
- Structure: src/tools/ (auth-tool.ts, card-data-tool.ts), src/services/, src/types/
- Key Considerations: dependency injection, logging, type-safe interfaces, secure token management, error handling
- "As an Agentic AI expert, proceed with generating the detailed TypeScript implementation"`}
            </div>
          </div>
          <div style={{background:"#1e293b",borderRadius:10,padding:"12px 16px",border:"1px solid #3b82f640"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:11,background:"#3b82f622",color:"#3b82f6",padding:"3px 10px",borderRadius:4,fontWeight:700}}>PROMPT 2</span>
              <span style={{fontSize:14,fontWeight:700,color:"#3b82f6"}}>Building the Agentic AI Workflow API</span>
            </div>
            <div style={{background:"#0f172a",borderRadius:8,padding:10,fontFamily:"monospace",fontSize:12,color:"#94a3b8",lineHeight:1.6,whiteSpace:"pre-wrap"}}>
{`Now I wnat to crate a Agentic AI workflow api. Create a new folder for this API project.
This API is created uisng node and tyepscript and uses Claude Agent SDK and model
1. There is one endpoint which we call as crop-approver. this accepts cardId and side
2. API will do the following thisn
   1. it first call the auth MCP by taking username and paassword from env
   2. then it calls 'get_card_data' MPC tool to get the card detils and return the response as output
3. For Claude Agent SDK use api key from env.
reference - https://platform.claude.com/docs/en/agent-sdk/typescript
https://github.com/anthropics/claude-agent-sdk-typescript`}
            </div>
          </div>
          <div style={{background:"#1e293b",borderRadius:10,padding:"12px 16px",border:"1px solid #22c55e40"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:11,background:"#22c55e22",color:"#22c55e",padding:"3px 10px",borderRadius:4,fontWeight:700}}>PROMPT 3</span>
              <span style={{fontSize:14,fontWeight:700,color:"#22c55e"}}>Data Extraction from Card Response</span>
            </div>
            <div style={{background:"#0f172a",borderRadius:8,padding:10,fontFamily:"monospace",fontSize:12,color:"#94a3b8",lineHeight:1.6,whiteSpace:"pre-wrap"}}>
{`Now in card-approver.ts once we get card data from crop-approver-agent tool.
extract the below information from the response and retunn the output
a. primaryGradindID = first read the card details resposnea and find out the primaryGrade object and then assing Id property value to this
b. graderId - first read the card details resposnea and find out the primaryGrade object and then use graderId property valye
c. expectedAccuracy - first read the card details resposnea and find out the primaryGrade object and then use expectedAccuracy property valye`}
            </div>
          </div>
          <div style={{background:"#1e293b",borderRadius:10,padding:"12px 16px",border:"1px solid #f59e0b40"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:11,background:"#f59e0b22",color:"#f59e0b",padding:"3px 10px",borderRadius:4,fontWeight:700}}>PROMPT 4</span>
              <span style={{fontSize:14,fontWeight:700,color:"#f59e0b"}}>Deployment — How to Connect Services</span>
            </div>
            <div style={{background:"#0f172a",borderRadius:8,padding:10,fontFamily:"monospace",fontSize:12,color:"#94a3b8",lineHeight:1.6,whiteSpace:"pre-wrap"}}>
{`i have created a MCP tools and we are consuming it to node js api project. on local we
MCP_SERVER_PATH=/Users/sumitkharche/arena-proj/crop-approver-agent/crop-approver-mcps/dist/index.js
this way we are refering the mcp tools but I wnat to now deploy both my api and mcps so how can they will communicate to each other`}
            </div>
          </div>
        </div>
        <div style={{background:"#a3e63512",borderRadius:8,padding:"8px 16px",border:"1px solid #a3e63530",textAlign:"center",flexShrink:0}}>
          <span style={{fontSize:13,color:"#a3e635",fontWeight:600}}>Each prompt built on the previous one's output — context accumulated = progressively better results.</span>
          <div style={{marginTop:4,fontSize:13}}>
            <span style={{color:"#94a3b8"}}>📄 All prompts: </span>
            <code style={{color:"#38bdf8",fontSize:12,wordBreak:"break-all"}}>https://github.com/skharche01/crop-approver-agent-ppt/blob/main/hackathon-prompts.md</code>
          </div>
        </div>
      </div>
    )
  },
  // SLIDE 5: Architecture Deep Dive
  {
    title: "System Architecture — Deep Dive",
    content: (
      <div style={{display:"flex",flexDirection:"column",gap:14,height:"100%",justifyContent:"center",alignItems:"center"}}>
        <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",width:"100%",maxWidth:660}}>
          <div style={{background:"#1e293b",borderRadius:14,padding:20,flex:1,minWidth:260,border:"2px solid #3b82f6"}}>
            <div style={{fontSize:16,fontWeight:700,color:"#3b82f6",marginBottom:6}}>CROP APPROVER API <span style={{fontWeight:400,color:"#64748b",fontSize:13}}>(Port 3000)</span></div>
            <div style={{fontSize:13,color:"#94a3b8",marginBottom:12,fontFamily:"monospace"}}>crop-approver-api · Express.js</div>
            <div style={{fontSize:14,lineHeight:1.9,color:"#cbd5e1"}}>
              <div><strong>Express Router:</strong> POST /crop-approver, GET /health</div>
              <div><strong>MCP Client:</strong> StreamableHTTPClientTransport</div>
              <div style={{marginLeft:14,color:"#94a3b8",fontSize:13}}>→ connect(), callTool(), disconnect()</div>
              <div><strong>Workflow Service:</strong> Orchestrates authenticate → getCardData</div>
              <div><strong>Decision Service:</strong> Claude Sonnet 4 + rule-based fallback</div>
            </div>
          </div>
          <div style={{background:"#1e293b",borderRadius:14,padding:20,flex:1,minWidth:260,border:"2px solid #a855f7"}}>
            <div style={{fontSize:16,fontWeight:700,color:"#a855f7",marginBottom:6}}>MCP SERVER <span style={{fontWeight:400,color:"#64748b",fontSize:13}}>(Port 5001)</span></div>
            <div style={{fontSize:13,color:"#94a3b8",marginBottom:12,fontFamily:"monospace"}}>crop-approver-mcps · MCP SDK v1.26.0</div>
            <div style={{fontSize:14,lineHeight:1.9,color:"#cbd5e1"}}>
              <div><strong>Server Factory:</strong> createMCPServer() → Server instance</div>
              <div><strong>Tools:</strong></div>
              <div style={{marginLeft:14}}><code style={{color:"#a3e635"}}>authenticate</code> → AuthService (SuperTokens)</div>
              <div style={{marginLeft:14}}><code style={{color:"#a3e635"}}>get_card_data</code> → CardService (REST)</div>
              <div style={{marginLeft:14}}><code style={{color:"#a3e635"}}>approve_crop</code> → CropApprovalService</div>
              <div><strong>Transport:</strong> HTTP (prod) + Stdio (local dev)</div>
            </div>
          </div>
        </div>
        <div style={{display:"flex",gap:24,marginTop:8}}>
          <div style={{background:"#0f172a",borderRadius:10,padding:"10px 18px",border:"1px solid #f59e0b",textAlign:"center"}}>
            <div style={{fontSize:14,fontWeight:600,color:"#f59e0b"}}>Claude Sonnet 4</div>
            <div style={{fontSize:12,color:"#64748b",fontFamily:"monospace"}}>claude-sonnet-4-20250514</div>
            <div style={{fontSize:12,color:"#94a3b8"}}>via @anthropic-ai/sdk</div>
          </div>
          <div style={{background:"#0f172a",borderRadius:10,padding:"10px 18px",border:"1px solid #22c55e",textAlign:"center"}}>
            <div style={{fontSize:14,fontWeight:600,color:"#22c55e"}}>Arena Club API</div>
            <div style={{fontSize:12,color:"#64748b",fontFamily:"monospace"}}>admin-951.dev.api.arenaclub.com</div>
            <div style={{fontSize:12,color:"#94a3b8"}}>Auth / Cards / Crop Approval</div>
          </div>
        </div>
        <div style={{fontSize:13,color:"#64748b",textAlign:"center"}}>Communication: Streamable HTTP (JSON-RPC over HTTP + SSE) · Per-session isolated auth state via mcp-session-id header</div>
      </div>
    )
  },
  // SLIDE 6: MCP Tools + AI Decision Engine
  {
    title: "MCP Tools & AI Decision Engine",
    content: (
      <div style={{display:"flex",flexDirection:"column",gap:12,height:"100%",justifyContent:"center"}}>
        <div style={{fontSize:16,fontWeight:700,color:"#a855f7",marginBottom:4}}>MCP Server Tools — crop-approver-mcps (Port 5001)</div>
        {[
          {name:"authenticate",color:"#22c55e",input:'{username, password}',api:'POST /st/auth/signin',output:'Stores st-access-token in session'},
          {name:"get_card_data",color:"#3b82f6",input:'{cardId, side: "front"|"back"}',api:'GET /admin/cards/{id}/grading-task-data/crop/{side}',output:'{primaryGrade: {id, graderId, expectedAccuracy}}'},
          {name:"approve_crop",color:"#a855f7",input:'{gradingTaskId, graderId, status, note}',api:'PATCH /grades/crop/{gradingTaskId}',output:'Approval confirmation'},
        ].map(t=>(
          <div key={t.name} style={{background:"#1e293b",borderRadius:10,padding:"10px 16px",border:`1px solid ${t.color}30`,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
            <code style={{fontSize:15,fontWeight:700,color:t.color,minWidth:120}}>{t.name}</code>
            <div style={{display:"flex",gap:16,flex:1,flexWrap:"wrap",fontSize:13}}>
              <span><span style={{color:"#64748b"}}>In: </span><code style={{color:"#94a3b8"}}>{t.input}</code></span>
              <span><span style={{color:"#64748b"}}>API: </span><code style={{color:"#f59e0b"}}>{t.api}</code></span>
              <span><span style={{color:"#64748b"}}>Out: </span><code style={{color:"#94a3b8"}}>{t.output}</code></span>
            </div>
          </div>
        ))}
        <div style={{fontSize:16,fontWeight:700,color:"#f59e0b",marginTop:8,marginBottom:4}}>AI Decision Engine — Claude Sonnet 4</div>
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          <div style={{background:"#1e293b",borderRadius:12,padding:"12px 16px",flex:1,minWidth:270,border:"1px solid #f59e0b40"}}>
            <div style={{fontSize:14,fontWeight:600,color:"#f59e0b",marginBottom:8}}>Decision Criteria</div>
            <div style={{fontSize:14,color:"#cbd5e1",lineHeight:1.9}}>
              <div>1. <strong>graderId</strong> ≠ ADAPTIVE_FARADAY_GRADER_ID?</div>
              <div style={{marginLeft:16,fontSize:13,color:"#94a3b8"}}>Special grader → always REJECT for human review</div>
              <div>2. <strong>expectedAccuracy</strong> {">"} 0.9 threshold?</div>
              <div style={{marginLeft:16,fontSize:13,color:"#94a3b8"}}>Below 90% confidence → REJECT</div>
              <div>3. Both pass → <span style={{color:"#a3e635",fontWeight:700}}>APPROVE</span> with reasoning</div>
            </div>
          </div>
          <div style={{background:"#1e293b",borderRadius:12,padding:"12px 16px",flex:1,minWidth:240,border:"1px solid #33415540"}}>
            <div style={{fontSize:14,fontWeight:600,color:"#94a3b8",marginBottom:8}}>Claude JSON Output</div>
            <div style={{background:"#0f172a",borderRadius:8,padding:10,fontFamily:"monospace",fontSize:12,color:"#94a3b8",lineHeight:1.7}}>
              {`{`}<br/>
              {`  "decision": "APPROVE" | "REJECT",`}<br/>
              {`  "reason": "Grader is not Adaptive`}<br/>
              {`    Faraday and accuracy (0.95)`}<br/>
              {`    exceeds threshold (0.9)",`}<br/>
              {`  "note": "Auto-approved by AI"`}<br/>
              {`}`}
            </div>
            <div style={{fontSize:12,color:"#64748b",marginTop:8,borderTop:"1px dashed #334155",paddingTop:8}}>
              <strong>Fallback:</strong> If Claude unavailable → same criteria via rule-based logic. Pipeline never stops.
            </div>
          </div>
        </div>
      </div>
    )
  },
  // SLIDE 7: Version History
  {
    title: "Version History — 3 Iterations (Detailed)",
    content: (
      <div style={{display:"flex",gap:14,height:"100%",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
        {[
          {
            v:"V1",title:"Direct API Calls",subtitle:'"Just Make It Work"',color:"#f87171",
            details:["Single monolithic file — all logic in one place","Auth token fetched inline before every request","Hardcoded endpoints: /st/auth/signin, /admin/cards/...","Decision logic: simple if/else, no AI","No separation of concerns — untestable"],
            problems:"Every new endpoint = rewrite fetch calls. Auth duplicated everywhere. Adding AI later meant threading through spaghetti code.",
            status:"❌ Worked but messy, fragile, impossible to reuse"
          },
          {
            v:"V2",title:"MCP Server",subtitle:'"Clean Architecture"',color:"#f59e0b",
            details:["Extracted Arena Club APIs into crop-approver-mcps","3 MCP tools: authenticate, get_card_data, approve_crop","Agent calls callTool() instead of raw fetch","Stdio transport initially → broke on deploy","Switched to Streamable HTTP (JSON-RPC + SSE)","Per-session Server instances with isolated auth"],
            problems:"Stdio requires shared stdin/stdout — impossible across networked containers. Switched to HTTP for production, kept Stdio for local dev.",
            status:"⚡ Decoupled, reusable, deployable"
          },
          {
            v:"V3",title:"AI Decision Layer",subtitle:'"Intelligence Added"',color:"#a3e635",
            details:["Added Claude Sonnet 4 as decision engine","Structured prompt: explicit criteria + JSON output","Extracts graderId, expectedAccuracy, primaryGradeId","Claude returns {decision, reason, note}","Rule-based fallback if Claude unavailable","Deployed: Docker → ECR → AWS App Runner"],
            problems:"First prompt was vague → inconsistent decisions. Fixed with structured criteria + expected output format. Now reliable and auditable.",
            status:"✅ Production-ready, intelligent, resilient"
          },
        ].map(v=>(
          <div key={v.v} style={{background:"#1e293b",borderRadius:14,padding:18,width:220,border:`2px solid ${v.color}`,display:"flex",flexDirection:"column",gap:8}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <span style={{fontSize:22,fontWeight:800,color:v.color}}>{v.v}</span>
              <div>
                <div style={{fontSize:15,fontWeight:700}}>{v.title}</div>
                <div style={{fontSize:11,color:"#64748b"}}>{v.subtitle}</div>
              </div>
            </div>
            <div style={{fontSize:13,lineHeight:1.7,color:"#cbd5e1",flex:1}}>
              {v.details.map((d,i)=><div key={i} style={{marginBottom:3}}>• {d}</div>)}
            </div>
            <div style={{fontSize:11,color:"#94a3b8",background:"#0f172a",borderRadius:8,padding:"8px 10px",lineHeight:1.5}}>
              <strong>Key lesson:</strong> {v.problems}
            </div>
            <div style={{fontSize:13,padding:"4px 10px",borderRadius:8,background:v.color+"18",color:v.color,textAlign:"center",fontWeight:600}}>{v.status}</div>
          </div>
        ))}
      </div>
    )
  },
  // SLIDE 8: What Didn't Work
  {
    title: "What Didn't Work & What I Learned",
    content: (
      <div style={{display:"flex",flexDirection:"column",gap:12,height:"100%",justifyContent:"center"}}>
        <div style={{background:"#1e293b",borderRadius:12,padding:"12px 18px",border:"1px solid #38bdf833"}}>
          <div style={{fontSize:15,fontWeight:700,color:"#38bdf8",marginBottom:6}}>💡 Prompting with Context Matters — Even for Code Generation</div>
          <div style={{display:"grid",gridTemplateColumns:"80px 1fr",gap:"3px 10px",fontSize:13,lineHeight:1.6}}>
            <span style={{color:"#64748b",fontWeight:600}}>What:</span><span style={{color:"#94a3b8"}}>Started with short, vague prompts when using Claude to help build the agent code.</span>
            <span style={{color:"#64748b",fontWeight:600}}>Problem:</span><span style={{color:"#f87171"}}>Short prompts without context led to wrong or incomplete code — had to constantly fix and retry.</span>
            <span style={{color:"#64748b",fontWeight:600}}>Fix:</span><span style={{color:"#a3e635"}}>Switched to detailed prompts with full context — project structure, specific needs, expected behavior, and constraints.</span>
            <span style={{color:"#64748b",fontWeight:600}}>Learned:</span><span style={{color:"#cbd5e1",fontWeight:600}}>Quality of AI output is directly proportional to the context you provide.</span>
          </div>
        </div>
        {[
          {fail:"Stdio Transport Doesn't Deploy",what:"Built MCP server with Stdio transport — worked beautifully for local dev.",problem:"Deployed as separate containers on AWS → Stdio broke. Requires shared stdin/stdout — impossible across containers.",fix:"Switched to Streamable HTTP transport. Kept Stdio for local dev = dual transport.",lesson:"Always consider deployment target when choosing protocols.",color:"#f87171"},
          {fail:"Claude Gave Inconsistent Decisions",what:'First prompt was vague: "decide if this crop should be approved." Same data → different decisions.',problem:"No explicit criteria, no output format. Claude was guessing what I wanted.",fix:"Structured prompt with explicit criteria + required JSON output: {decision, reason, note}.",lesson:"Vague prompts → vague results. Structured prompts = reliable, auditable decisions.",color:"#f59e0b"},
          {fail:"Direct API Calls Got Messy (V1)",what:"V1 had fetch calls scattered everywhere — auth inline, endpoints hardcoded.",problem:"Every new endpoint = rewrite. Auth duplicated. No separation of concerns.",fix:"Wrapped all APIs in MCP tools → standardized callTool() interface. Testable, reusable.",lesson:"MCP isn't just about AI — it's about clean tool abstraction.",color:"#a855f7"},
        ].map((f,i)=>(
          <div key={i} style={{background:"#1e293b",borderRadius:12,padding:"12px 18px",border:`1px solid ${f.color}33`}}>
            <div style={{fontSize:14,fontWeight:700,color:f.color,marginBottom:4}}>💥 {f.fail}</div>
            <div style={{display:"grid",gridTemplateColumns:"80px 1fr",gap:"2px 10px",fontSize:12,lineHeight:1.5}}>
              <span style={{color:"#64748b",fontWeight:600}}>What:</span><span style={{color:"#94a3b8"}}>{f.what}</span>
              <span style={{color:"#64748b",fontWeight:600}}>Problem:</span><span style={{color:"#f87171"}}>{f.problem}</span>
              <span style={{color:"#64748b",fontWeight:600}}>Fix:</span><span style={{color:"#a3e635"}}>{f.fix}</span>
              <span style={{color:"#64748b",fontWeight:600}}>Learned:</span><span style={{color:"#cbd5e1",fontWeight:600}}>{f.lesson}</span>
            </div>
          </div>
        ))}
      </div>
    )
  },
  // SLIDE 9: Why MCP
  {
    title: "Why MCP + Streamable HTTP Transport",
    content: (
      <div style={{display:"flex",flexDirection:"column",gap:16,height:"100%",justifyContent:"center"}}>
        <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
          <div style={{background:"#1e293b",borderRadius:14,padding:20,width:260,border:"1px solid #f87171"}}>
            <div style={{fontSize:16,fontWeight:700,color:"#f87171",marginBottom:12,textAlign:"center"}}>Without MCP (V1)</div>
            <div style={{fontSize:14,lineHeight:1.8,color:"#94a3b8"}}>
              • Direct API calls — tightly coupled<br/>
              • Custom fetch code for each endpoint<br/>
              • Auth logic duplicated everywhere<br/>
              • Hard to swap, test, or reuse<br/>
              • No isolation between requests<br/>
              • Adding new APIs = rewrite
            </div>
          </div>
          <div style={{background:"#1e293b",borderRadius:14,padding:20,width:260,border:"2px solid #a3e635"}}>
            <div style={{fontSize:16,fontWeight:700,color:"#a3e635",marginBottom:12,textAlign:"center"}}>With MCP (V2+) ✅</div>
            <div style={{fontSize:14,lineHeight:1.8,color:"#cbd5e1"}}>
              • <strong>Tool abstraction</strong> — AI calls callTool()<br/>
              • <strong>Reusable</strong> — any MCP client can connect<br/>
              • <strong>Isolated auth</strong> — per-session tokens<br/>
              • <strong>Dual transport</strong> — Stdio + HTTP<br/>
              • <strong>JSON-RPC 2.0</strong> — standardized protocol
            </div>
          </div>
        </div>
        <div style={{background:"#1e293b",borderRadius:12,padding:16,maxWidth:560,margin:"0 auto",border:"1px solid #334155"}}>
          <div style={{fontSize:15,fontWeight:700,marginBottom:10}}>Streamable HTTP Transport — How Sessions Work</div>
          <div style={{fontSize:13,lineHeight:1.8,color:"#94a3b8",fontFamily:"monospace"}}>
            <div>1. Client → POST /mcp (initialize) → Server creates instance + mcp-session-id</div>
            <div>2. Client → POST /mcp + session-id → callTool("authenticate") → token stored</div>
            <div>3. Client → POST /mcp + session-id → callTool("get_card_data") → uses token</div>
            <div>4. Client → POST /mcp + session-id → callTool("approve_crop") → executes</div>
            <div>5. Client → DELETE /mcp + session-id → frees resources</div>
          </div>
          <div style={{fontSize:13,color:"#a3e635",marginTop:10}}>Key: Each session has ISOLATED auth state — no token leakage between concurrent requests.</div>
        </div>
      </div>
    )
  },
  // SLIDE 10: Deployment
  {
    title: "Deployment Architecture — AWS",
    content: (
      <div style={{display:"flex",flexDirection:"column",gap:14,height:"100%",justifyContent:"center",alignItems:"center"}}>
        <div style={{background:"#1e293b",borderRadius:16,padding:20,border:"2px solid #f59e0b",maxWidth:620,width:"100%"}}>
          <div style={{fontSize:16,fontWeight:700,color:"#f59e0b",marginBottom:14,textAlign:"center"}}>AWS App Runner — Auto-scaling Containers</div>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <div style={{background:"#0f172a",borderRadius:12,padding:14,flex:1,minWidth:240,border:"1px solid #3b82f6"}}>
              <div style={{fontSize:15,fontWeight:700,color:"#3b82f6"}}>Crop Approver API</div>
              <div style={{fontSize:13,color:"#94a3b8",marginTop:8,lineHeight:1.8,fontFamily:"monospace"}}>
                Image: ECR (crop-approver-api:latest)<br/>
                Port: 3000 · 1 vCPU · 2 GB RAM<br/>
                Health: GET /health<br/><br/>
                <span style={{color:"#64748b"}}>Env:</span> CLAUDE_API_KEY, MCP_SERVER_URL,<br/>
                MCP_USERNAME, MCP_PASSWORD,<br/>
                CLAUDE_MODEL, ACCURACY_THRESHOLD
              </div>
            </div>
            <div style={{background:"#0f172a",borderRadius:12,padding:14,flex:1,minWidth:240,border:"1px solid #a855f7"}}>
              <div style={{fontSize:15,fontWeight:700,color:"#a855f7"}}>MCP Server</div>
              <div style={{fontSize:13,color:"#94a3b8",marginTop:8,lineHeight:1.8,fontFamily:"monospace"}}>
                Image: ECR (crop-mcp-server:latest)<br/>
                Port: 5001 · 1 vCPU · 2 GB RAM<br/>
                Health: GET /health<br/><br/>
                <span style={{color:"#64748b"}}>Env:</span> API_BASE_URL,<br/>
                LOGIN_ENDPOINT, API_TIMEOUT,<br/>
                MCP_HTTP_PORT=5001
              </div>
            </div>
          </div>
        </div>
        <div style={{display:"flex",gap:24}}>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:12,color:"#64748b"}}>↓ HTTPS</div>
            <div style={{background:"#0f172a",borderRadius:10,padding:"10px 18px",border:"1px solid #f59e0b",fontSize:14,marginTop:4}}>
              <div style={{fontWeight:600,color:"#f59e0b"}}>Anthropic API</div>
              <div style={{color:"#94a3b8",fontSize:12,fontFamily:"monospace"}}>api.anthropic.com</div>
            </div>
          </div>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:12,color:"#64748b"}}>↓ HTTPS</div>
            <div style={{background:"#0f172a",borderRadius:10,padding:"10px 18px",border:"1px solid #22c55e",fontSize:14,marginTop:4}}>
              <div style={{fontWeight:600,color:"#22c55e"}}>Arena Club API</div>
              <div style={{color:"#94a3b8",fontSize:12,fontFamily:"monospace"}}>admin-951.dev.api.arenaclub.com</div>
            </div>
          </div>
        </div>
        <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
          {["Docker multi-stage Alpine","~150MB images","Non-root user","Auto-scaling","Node.js 20","TypeScript ES2022"].map(t=>(
            <span key={t} style={{fontSize:12,background:"#0f172a",borderRadius:8,padding:"4px 14px",color:"#94a3b8",border:"1px solid #1e293b"}}>{t}</span>
          ))}
        </div>
      </div>
    )
  },
  // SLIDE 11: Design Decisions
  {
    title: "Key Design Decisions",
    content: (
      <div style={{display:"flex",flexDirection:"column",gap:10,height:"100%",justifyContent:"center",alignItems:"center"}}>
        {[
          {decision:"Transport Protocol",choice:"Streamable HTTP over Stdio",rationale:"Enables independent deployment as separate containers, network-based communication. Stdio kept for local dev."},
          {decision:"AI Model",choice:"Claude Sonnet 4",rationale:"Fast, accurate, cost-effective for structured decisions. Provides natural language reasoning for audit trails."},
          {decision:"Fallback Strategy",choice:"Rule-based deterministic logic",rationale:"If Claude is unavailable, same criteria applied via code — pipeline never stops."},
          {decision:"Session Architecture",choice:"Per-session Server instances",rationale:"Each request gets fresh auth state via mcp-session-id header. No token leakage."},
          {decision:"Server Factory Pattern",choice:"Shared createMCPServer() function",rationale:"Single tool registration shared between Stdio and HTTP entry points. DRY."},
          {decision:"Docker Strategy",choice:"Multi-stage Alpine builds",rationale:"Small images (~150MB), non-root user for security, production-optimized."},
          {decision:"Cloud Platform",choice:"AWS App Runner + ECR",rationale:"Auto-scaling with zero infra management. Built-in health checks."},
        ].map(d=>(
          <div key={d.decision} style={{display:"flex",alignItems:"flex-start",gap:14,maxWidth:640,width:"100%",background:"#1e293b",borderRadius:10,padding:"10px 18px",border:"1px solid #0f172a"}}>
            <div style={{minWidth:150,flexShrink:0}}>
              <div style={{fontSize:13,color:"#64748b",fontWeight:600}}>{d.decision}</div>
              <div style={{fontSize:15,color:"#a3e635",fontWeight:700}}>{d.choice}</div>
            </div>
            <div style={{fontSize:14,color:"#94a3b8",lineHeight:1.6}}>{d.rationale}</div>
          </div>
        ))}
      </div>
    )
  },
  // SLIDE 12: Starting Level (moved here)
  {
    title: "My Starting Level & The Leap",
    content: (
      <div style={{display:"flex",flexDirection:"column",gap:20,height:"100%",justifyContent:"center"}}>
        <div style={{display:"flex",alignItems:"center",gap:24,justifyContent:"center",flexWrap:"wrap"}}>
          <div style={{background:"#1e293b",borderRadius:16,padding:"22px 30px",textAlign:"center",minWidth:200,border:"1px solid #334155"}}>
            <div style={{fontSize:13,color:"#f87171",marginBottom:8,textTransform:"uppercase",letterSpacing:2,fontWeight:600}}>Before Hackathon</div>
            <div style={{fontSize:52,fontWeight:800}}>1</div>
            <div style={{fontSize:17,color:"#94a3b8",marginTop:4}}>Chat User</div>
          </div>
          <div style={{fontSize:38,color:"#a3e635",fontWeight:700}}>→</div>
          <div style={{background:"linear-gradient(135deg,rgba(163,230,53,0.12),rgba(163,230,53,0.04))",borderRadius:16,padding:"22px 30px",textAlign:"center",minWidth:200,border:"2px solid #a3e635"}}>
            <div style={{fontSize:13,color:"#a3e635",marginBottom:8,textTransform:"uppercase",letterSpacing:2,fontWeight:600}}>After Hackathon</div>
            <div style={{fontSize:52,fontWeight:800,color:"#a3e635"}}>3+</div>
            <div style={{fontSize:17,color:"#a3e635",marginTop:4}}>Vibe Coder & Beyond</div>
          </div>
        </div>
        <div style={{background:"#1e293b",borderRadius:12,padding:"16px 22px",maxWidth:600,margin:"0 auto",border:"1px solid #334155",width:"100%"}}>
          <div style={{fontSize:15,fontWeight:700,color:"#f87171",marginBottom:8}}>Before: Zero AI Agent Experience</div>
          <div style={{fontSize:14,color:"#94a3b8",lineHeight:1.6}}>
            Used Claude as a coding assistant — getting help with code, debugging, and development tasks. But had <strong style={{color:"#cbd5e1"}}>zero experience</strong> with:
          </div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:10}}>
            {["Building AI agents","Model Context Protocol (MCP)","Prompt engineering for structured decisions","Connecting AI to production APIs"].map(t=>(
              <span key={t} style={{fontSize:13,background:"#f8717115",border:"1px solid #f8717130",borderRadius:8,padding:"5px 14px",color:"#f87171"}}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{background:"#1e293b",borderRadius:12,padding:"16px 22px",maxWidth:600,margin:"0 auto",border:"1px solid #a3e635",width:"100%"}}>
          <div style={{fontSize:15,fontWeight:700,color:"#a3e635",marginBottom:8}}>After: Working AI Agent Prototype</div>
          <div style={{fontSize:14,color:"#94a3b8",lineHeight:1.6}}>
            Went from using Claude for coding help to <strong style={{color:"#cbd5e1"}}>building a working AI-powered agent prototype</strong> with its own custom MCP server, deployed on AWS App Runner with Docker containers. That's not a one-level jump — <strong style={{color:"#a3e635"}}>that's a leap.</strong>
          </div>
        </div>
      </div>
    )
  },
  // SLIDE 13: How I'll Apply
  {
    title: "How I'll Apply This at Arena Club",
    content: (
      <div style={{display:"flex",flexDirection:"column",gap:14,height:"100%",justifyContent:"center"}}>
        <div style={{fontSize:20,fontWeight:700,textAlign:"center",color:"#a3e635"}}>Vision: Make the Entire Admin App Smarter with AI Agents</div>
        <div style={{fontSize:14,color:"#94a3b8",textAlign:"center",maxWidth:560,margin:"0 auto",marginBottom:4}}>
          Crop approval is just the first use case. The same pattern can expand across <strong style={{color:"#cbd5e1"}}>every grading task</strong> to make our Admin app intelligent and automated.
        </div>
        <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap",marginBottom:4}}>
          {[
            {task:"Crop Approval",status:"✅ Done",color:"#a3e635",desc:"Auto-approve high-confidence crops via AI agent"},
            {task:"Card Type Detection",status:"🔜 Next",color:"#f59e0b",desc:"AI identifies card type (base, refractor, auto, etc.)"},
            {task:"Review Step",status:"🔜 Next",color:"#f59e0b",desc:"AI-assisted quality review at each grading checkpoint"},
            {task:"Final Grade Validation",status:"📋 Planned",color:"#3b82f6",desc:"Cross-check all sub-grades before final score"},
          ].map(t=>(
            <div key={t.task} style={{background:"#1e293b",borderRadius:10,padding:"10px 14px",width:190,border:`1px solid ${t.color}30`}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6}}>
                <span style={{fontSize:14,fontWeight:700,color:"#e2e8f0"}}>{t.task}</span>
                <span style={{fontSize:11,color:t.color,fontWeight:600}}>{t.status}</span>
              </div>
              <div style={{fontSize:13,color:"#94a3b8",lineHeight:1.5}}>{t.desc}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <div style={{background:"#1e293b",borderRadius:12,padding:"12px 16px",width:195,border:"1px solid #334155"}}>
            <div style={{fontSize:14,fontWeight:700,color:"#a3e635",marginBottom:8}}>🧩 The Approach</div>
            <div style={{fontSize:13,color:"#94a3b8",lineHeight:1.6}}>
              1. Identify manual bottleneck<br/>
              2. Write structured Claude prompt<br/>
              3. Add rule-based fallback<br/>
              4. Integrate with workflows<br/>
              5. Use Agentic AI patterns to build smart grading agents that reduce manual efforts
            </div>
          </div>
          <div style={{background:"#1e293b",borderRadius:12,padding:"12px 16px",width:195,border:"1px solid #334155"}}>
            <div style={{fontSize:14,fontWeight:700,color:"#f59e0b",marginBottom:8}}>🕐 Timeline</div>
            <div style={{fontSize:13,color:"#94a3b8",lineHeight:1.6}}>
              Short-term: Refactor and align with current architecture<br/>
              Mid-term: Expand to card type and review step<br/>
              Long-term: AI-assisted decisions across grading pipeline
            </div>
          </div>
          <div style={{background:"#1e293b",borderRadius:12,padding:"12px 16px",width:195,border:"1px solid #334155"}}>
            <div style={{fontSize:14,fontWeight:700,color:"#a855f7",marginBottom:8}}>🎯 End Goal</div>
            <div style={{fontSize:13,color:"#94a3b8",lineHeight:1.6}}>
              Admin app where AI handles routine grading decisions — humans focus on edge cases and complex cards only.
            </div>
          </div>
        </div>
        <div style={{background:"rgba(163,230,53,0.1)",borderRadius:12,padding:"12px 20px",border:"1px solid rgba(163,230,53,0.3)",maxWidth:620,margin:"0 auto",textAlign:"center"}}>
          <div style={{fontSize:14,color:"#a3e635",fontWeight:700,marginBottom:4}}>🤝 Accountability</div>
          <div style={{fontSize:13,color:"#94a3b8",lineHeight:1.6}}>
            Prototype is deployed on AWS as a proof of concept. Next step is to refactor and align with our current codebase structure and best practices before expanding to other grading tasks.
          </div>
        </div>
      </div>
    )
  },
  // SLIDE 14: Thank You
  {
    title: "",
    content: (
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",textAlign:"center",gap:28}}>
        <div style={{fontSize:50,fontWeight:800,color:"#a3e635"}}>Thank You!</div>
        <div style={{fontSize:20,color:"#cbd5e1",maxWidth:540,lineHeight:1.7}}>
          Thanks to Jesse, Vartul, and the entire Arena Club team for organizing the Agentic AI Hackathon.
        </div>
        <div style={{fontSize:16,color:"#94a3b8",maxWidth:520,lineHeight:1.8}}>
          A special thanks to Alan and Austin from the Ops team — collaborating with them gave me a much deeper understanding of the grading pipeline, the real pain points, and how things work on the ground. This cross-team experience was one of the most valuable parts of the hackathon.
        </div>
        <div style={{fontSize:16,color:"#94a3b8",maxWidth:520,lineHeight:1.8,marginTop:4}}>
          This hackathon pushed me to learn AI agents, MCP, prompt engineering, and deployment patterns I had never touched before. Grateful for the opportunity to grow and build something meaningful.
        </div>
        <div style={{fontSize:20,color:"#e2e8f0",marginTop:16,fontWeight:600}}>
          Sumit Kharche
        </div>
      </div>
    )
  },
];

export default function SlideDeck() {
  const [idx, setIdx] = useState(0);
  const slide = slides[idx];
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === " ") setIdx(i => Math.min(slides.length - 1, i + 1));
    if (e.key === "ArrowLeft") setIdx(i => Math.max(0, i - 1));
  };
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown} style={{background:"#0f172a",color:"#f1f5f9",fontFamily:"system-ui,-apple-system,sans-serif",height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden",outline:"none"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 24px",borderBottom:"1px solid #1e293b",flexShrink:0}}>
        <div style={{fontSize:13,color:"#64748b"}}>Crop Approver Agent — Agentic AI Hackathon</div>
        {slide.title && <div style={{fontSize:15,fontWeight:700,color:"#a3e635",textAlign:"center",flex:1}}>{slide.title}</div>}
        <div style={{fontSize:13,color:"#64748b",minWidth:60,textAlign:"right"}}>{idx + 1} / {slides.length}</div>
      </div>
      <div style={{flex:1,padding:"20px 32px",overflow:"auto"}}>
        {slide.content}
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:14,padding:"12px 24px",borderTop:"1px solid #1e293b",flexShrink:0}}>
        <button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0} style={{background:idx===0?"#1e293b":"#a3e635",color:idx===0?"#64748b":"#0f172a",border:"none",borderRadius:8,padding:"8px 22px",fontWeight:700,cursor:idx===0?"default":"pointer",fontSize:14}}>← Prev</button>
        <div style={{display:"flex",gap:4}}>
          {slides.map((_, i) => (
            <div key={i} onClick={() => setIdx(i)} style={{width:i===idx?20:8,height:8,borderRadius:4,background:i===idx?"#a3e635":"#334155",cursor:"pointer",transition:"all 0.2s"}} />
          ))}
        </div>
        <button onClick={() => setIdx(Math.min(slides.length - 1, idx + 1))} disabled={idx===slides.length-1} style={{background:idx===slides.length-1?"#1e293b":"#a3e635",color:idx===slides.length-1?"#64748b":"#0f172a",border:"none",borderRadius:8,padding:"8px 22px",fontWeight:700,cursor:idx===slides.length-1?"default":"pointer",fontSize:14}}>Next →</button>
      </div>
    </div>
  );
}