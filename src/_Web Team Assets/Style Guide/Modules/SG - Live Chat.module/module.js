window.hsConversationsSettings = {
  loadImmediately: false,
  inlineEmbedSelector: '#chat',
};  

function onConversationsAPIReady() {
  var i = document.getElementById('chat');
  var loadImmediately = i.getAttribute('data-chat-load') === "true"
  if (loadImmediately || !window.IntersectionObserver) {
    window.HubSpotConversations.widget.load();
  } else {
    var options = {
      threshold: .1
    }

    var observer = new window.IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          window.HubSpotConversations.widget.load();
        }
      });
    }, options);
    observer.observe(document.querySelector('#chat'));
  }
}

if (window.HubSpotConversations) {
  onConversationsAPIReady();
} else {
  window.hsConversationsOnReady = [onConversationsAPIReady];
}

