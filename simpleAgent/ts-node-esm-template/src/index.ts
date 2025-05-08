import ChatOpenAI from './ChatOpenAI';
import MCPClient from './MCPClient';


async function main() {
  const fetchMCP = new MCPClient(
    "fetch",
    "uvx",['mcp-server-fetch'])
  await fetchMCP.init();
  const tools = fetchMCP.getTools();
  console.log("Tools: ", tools);
  await fetchMCP.close();
}

main();
