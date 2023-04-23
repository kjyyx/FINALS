<template>
  <div class="About">
    <h1>
      {{ title }}
    </h1>
    <main>
      <section class="py-5 bg-light" id="scroll-target">
        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src="https://otousedcar.storage.googleapis.com/PH/cm/1436370/listing_images/PH/upload_5e2021a1530718.14026012.jpg?resize=500x333"
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <h2 class="fw-bolder">Our founding</h2>
              <p class="lead fw-normal text-muted mb-0">
                Brisk, a car rental service, began its journey in 2014 with only
                one car. Even though there were numerous competitors, the
                company persisted through rough times and challenges. Over time,
                Brisk grew its collection of vehicles while maintaining a focus
                on superior customer service and dependable cars. This approach
                helped to create a devoted customer following, which enabled
                Brisk to expand its business.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-first order-lg-last">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src="https://www.autocar.co.nz/wp-content/uploads/2021/09/toyotarange1.jpg"
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <h2 class="fw-bolder">Growth &amp; beyond</h2>
              <p class="lead fw-normal text-muted mb-0">
                Despite the modest beginnings, Brisk steadily grew its fleet and
                customer base over the years. Today, it operates in multiple
                cities, offering a range of vehicles and services to its loyal
                clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 bg-light">
        <div class="container px-5 my-5">
          <div class="text-center">
            <h2 class="fw-bolder">Our team</h2>
            <p class="lead fw-normal text-muted mb-5">
              Dedicated to quality and your success
            </p>
          </div>
          <div
            class="
              row
              gx-5
              row-cols-1 row-cols-sm-2 row-cols-xl-4
              justify-content-center
            "
          >
            <div class="col mb-5 mb-5 mb-xl-0">
              <div class="text-center">
                <img
                  class="img-fluid1 rounded-circle mb-4 px-4"
                  src="https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/341259128_1190309828338008_4272768443108572702_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeETcG-rc4FsarnDTVCT6Q04plzsTbPrEuymXOxNs-sS7EmiWdyisg90kbg6PbGEgHSG0oO028k3kmFsEylJt28F&_nc_ohc=FhFflVniTr4AX-XvEWW&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfDNy1hU6Isetz6KU3O5VX3Ncg83CpyqcO5ajhycpZcq3A&oe=6448926C"
                  alt="..."
                />
                <h5 class="fw-bolder">Kenji Palawan</h5>
                <div class="fst-italic text-muted">Founder &amp; CEO</div>
              </div>
            </div>
            <div class="col mb-5 mb-5 mb-xl-0">
              <div class="text-center">
                <img
                  class="img-fluid1 rounded-circle mb-4 px-4"
                  src="data:image/jpeg;base64,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"
                  alt="..."
                />
                <h5 class="fw-bolder">Jeremy Clarkson</h5>
                <div class="fst-italic text-muted">CFO</div>
              </div>
            </div>
            <div class="col mb-5 mb-5 mb-sm-0">
              <div class="text-center">
                <img
                  class="img-fluid1 rounded-circle mb-4 px-4"
                  src="https://i.imgflip.com/2/j07em.jpg"
                  alt="..."
                />
                <h5 class="fw-bolder">James May</h5>
                <div class="fst-italic text-muted">Operations Manager</div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="text-center">
                <img
                  class="img-fluid1 rounded-circle mb-4 px-4"
                  src="https://thegrandtourfans.com/wp-content/uploads/2022/02/autostradamagazine_1644076357524_0-150x150.jpg"
                  alt="..."
                />
                <h5 class="fw-bolder">Richard Hammond</h5>
                <div class="fst-italic text-muted">CTO</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      title: 'This is the About Component',
    };
  },
};
</script>

<style scoped>
.img-fluid1 {
  width: 200px;
  height: auto;
}
</style>
