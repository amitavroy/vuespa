<script>
  import PrivateMessageSidebar from './PrivateMessageSidebar'
  export default {
    components: {
      'private-message-sidebar': PrivateMessageSidebar
    }
  }
</script>

<template>
  <div class="PrivateMessage PrivateMessage-Sent">
    <section class="header">
      <h1 class="page-title">Private Messages - Sent <small>My private messages which I have sent.</small></h1>
    </section>

    <section class="content">
      <div class="row">
        <div class="col-md-2 col-sm-2 col-with-right-border">
          <private-message-sidebar></private-message-sidebar>
        </div>
      </div>
    </section>

  </div>
</template>
