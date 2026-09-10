import { useEffect } from 'react';

export default function WatsonAssistant() {
  useEffect(() => {
    const watsonConfig = {
      integrationID: 'e611fed7-1681-44e5-a37d-9e6abe934a45',
      region: 'us-south',
      serviceInstanceID: '0177986c-b5c0-4d7f-a7f8-b4a819fe3eaa',
      showLauncher: true,
      openChatByDefault: false,
      onLoad: async (instance: { render: () => Promise<void> }) => {
        await instance.render();
      },
    };

    (window as any).watsonAssistantChatOptions = watsonConfig;

    const timeout = setTimeout(() => {
      const script = document.createElement('script');
      script.src =
        'https://web-chat.global.assistant.watson.appdomain.cloud/versions/' +
        'latest' +
        '/WatsonAssistantChatEntry.js';
      script.async = true;
      document.head.appendChild(script);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
