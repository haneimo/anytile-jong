<template>
  <nav class="navbar navbar-expand-lg bg-primary-subtle">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand">
        <img src="/logo.png" alt="Logo" width="64" height="64" class="d-inline-block align-text-top">
        Any-Tile-Jong
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'game-list'}" class="nav-link">Games</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'game-new'}" class="nav-link">Game:new</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'game-detail', params: { name: 'sample001' } }" class="nav-link">Game:sample001</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
