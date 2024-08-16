<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
const value = ref('')
const handleLoginTwitter = async () => {
  try {
    const response = await fetch(
      'https://api.twitter.com/oauth/request_token',
      {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization:
            'OAuth oauth_signature_method="HMAC-SHA1", oauth_consumer_key="pRwaOCKV1qFbzMLlpq8f428AM", oauth_signature="XcqekLiNgfsnunbfywxR6gO1CvyQw8IGbBpT2QAifw74a7kTn0", oauth_version="1.0"',
          Origin: 'https://api.twitter.com',
        },
        body: null, // Fetch API requires a body for POST requests, but here it's null (like the axios example)
      }
    )
    console.log('res', response.json())
  } catch (error) {
    console.error('Error during Twitter login:', error)
  }
}
</script>

<template>
  <div class="contact">
    <p>sam</p>
    <button @click="handleLoginTwitter">Login twitter</button>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  padding-top: 3rem;
  padding-bottom: 3rem;
  &-content {
    background: linear-gradient(to right, #1777ff, #162cbb);
    padding: 3rem 1rem;
    border-radius: 1rem;
    .title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 2rem;
      font-weight: 500;
      color: white;
      .percent {
        color: red;
      }
    }
    .form {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      .custom-input {
        flex: 1;
      }
    }
  }
}
</style>
