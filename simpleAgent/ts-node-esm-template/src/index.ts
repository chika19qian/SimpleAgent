import ChatOpenAI from './ChatOpenAI';


async function main() {
  const llm = new ChatOpenAI('deepseek-chat');
  const { content, toolCalls } = await llm.chat(); 
  console.log(content);
  console.log(toolCalls);
}

main();
