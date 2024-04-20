<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {Loader} from "@googlemaps/js-api-loader";
import {onMounted, ref} from "vue";

export default {
  name: "CompanyMap",
  setup(){
    const mapDiv = ref(null)
    const key = 'AIzaSyB9ib6jCQ5Tm8OpItidxHPU0U1pJjkSqwM'
    const position = {
      lat: 52.304610666913824,
      lng: 16.955011700478387
    }

    const loader = new Loader({ apiKey: key })

    onMounted(async () => {
      await loader.load()
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement, PinElement  } = await google.maps.importLibrary("marker");
      const map = new Map(mapDiv.value, {
        mapId: '8c5bb697c76224c2',
        center: position,
        zoom: 17,
      })
      const pinBackground = new PinElement({
        background: "#299B4D",
        glyphColor: "white",
        borderColor: "#299B4D"
      });
      const companyMarker = new AdvancedMarkerElement({
        map,
        position,
        content: pinBackground.element
      });
    })

    return { mapDiv }
  }
}
</script>

<template>
  <div ref="mapDiv"></div>
</template>

<style scoped>
  div{
    height: 400px;
  }
</style>