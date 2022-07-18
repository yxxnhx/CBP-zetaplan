import { useCallback, useEffect, useRef} from 'react'; 

function ZetaCnMap() {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    const uluru = { lat:40.00818049076362, lng: 116.3258909739533};
    const map=new window.google.maps.Map(mapRef.current, {
      center: uluru,
      zoom:14,
    });
    new window.google.maps.Marker({
      position: uluru,
      map: map,
    });
  }, [mapRef]);
  
  useEffect(() => {
    window.initMap = initMap;
    initMap();
  }, [initMap]);

  return (
    <div
      className="map"
      style={{ width: '100%', height: '56rem' }}
      ref={mapRef}
    ></div>
  );
}

export default ZetaCnMap;