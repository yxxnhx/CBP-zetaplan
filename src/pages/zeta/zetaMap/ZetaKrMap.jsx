import { useCallback, useEffect, useRef} from 'react'; 

function ZetaKrMap() {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    const uluru = { lat:37.4755, lng:126.8817};
    const map=new window.google.maps.Map(mapRef.current, {
      center: uluru,
      zoom:16,
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

export default ZetaKrMap;