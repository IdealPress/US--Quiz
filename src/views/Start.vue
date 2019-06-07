<template>
  <div>
    <div class="m-background m-background--media-1"></div>
    <Brand />
    <div class="l-container">
      <div class="intro">
        <img src="../assets/images/logos/logo__unite.png"  class="unite-logo" />
        <p>Here's your chance to have a sneak peek into the world of a group of university students, who live together.</p>
        <p>As you explore their flat you'll encounter five different situations with potential solutions.</p>
        <p>Think about how you'd react to discover which student has the closest personality to yours.</p>
        <p>Let's start the tour and meet the flatmates.</p>
      </div>
      <router-link class="m-btn m-btn--left m-btn__secondary"
        :to="{ name: 'intros' }">Meet the students &nbsp;<span><img width="100px" src="../assets/images/students/students__all.png"></span>
      </router-link>
    </div>
    <div class="footer">
      <p><strong>As the UK's largest student accommodation provider, Unite Students has spent years providing a home for success for young people, supporting them to thrive while they make the big 'Leap' to university life.</strong></p>
        <p>Our insight reports have identified a significant gap in teenagers’ expectations of what life will be like living away at university. We know that by better equipping young people for the leap to university, the better they will overcome the challenges ahead. Please click here to find out more about <a href="#" class="text">The Leap</a>.</p>
    </div>
  </div>
</template>

<style scoped lang='scss'>

a {
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: inline-flex;
  padding: 0px;
  align-items: center;
  padding: 0px 1em;
}

.intro {
  margin-left: 5%;
  width: 46%;
  padding: 50px 40px;
  font-size: 1.3rem;
}

.unite-logo {
  width:250px;
}

</style>
