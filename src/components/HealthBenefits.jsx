// components/HealthBenefits.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * HealthBenefits carousel
 * - Optimized for container max-width: 1240px (use on 1240px screen)
 * - Uses plain <img> tags (place images in public/images/)
 * - Responsive visible items: 1 / 2 / 3 / 4 (>=1100 => 4 items)
 * - Infinite loop via cloning; translate3d px-based; transition: all 0.25s ease
 * - Auto-play ON by default (3s), pause on hover, prev/next works, swipe support
 *
 * Required images (put in public/images/):
 * health-benefits_01.png ... health-benefits_06.png
 *
 * To use: import HealthBenefits from "../components/HealthBenefits";
 * then include <HealthBenefits /> in your page.
 */

export default function HealthBenefits() {
  // base items (change text or image names if you like)
  const baseItems = [
    { id: 1, img: "/images/icon-1.jpeg", small: "Ideal for", bold: "high-heat cooking" },
    { id: 2, img: "/images/icon-2.jpeg", small: "Beneficial for", bold: "heart health" },
    { id: 3, img: "/images/icon-3.jpeg", small: "Promotes", bold: "glowing, healthy skin" },
    { id: 4, img: "/images/icon-4.jpeg", small: "Protects cells", bold: "from oxidative damage" },
    { id: 5, img: "/images/icon-5.jpeg", small: "Retains purity,", bold: "free from chemicals" },
    { id: 6, img: "/images/icon-6.jpeg", small: "Supports", bold: "weight management & lowers BP" },
  ];

  // ====== CONFIG (easy to change) ======
  const ITEM_W = 300;     // px width of each item
  const GAP = 16;         // px gap between items (margin-right)
  const TRANS_MS = 250;   // transition time in ms (0.25s)
  const AUTO_MS = 3000;   // autoplay interval (3s)
  const MIN_CLONES = 2;   // minimum cloned items on each side
  // ======================================

  const [visible, setVisible] = useState(4); // number visible (responsive)
  const [items, setItems] = useState([]);    // base + clones
  const [index, setIndex] = useState(0);     // current index in items array
  const trackRef = useRef(null);
  const autoRef = useRef(null);
  const transitioningRef = useRef(false);

  // responsive visible counts (optimized for 1240px)
  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      if (w < 640) setVisible(1);
      else if (w < 900) setVisible(2);
      else if (w < 1100) setVisible(3);
      else setVisible(4); // >=1100 (1240 will fall here)
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // create clones for infinite loop (cloneCount = visible or MIN_CLONES)
  useEffect(() => {
    const cloneCount = Math.max(visible, MIN_CLONES);
    const head = baseItems.slice(0, cloneCount);
    const tail = baseItems.slice(-cloneCount);
    const full = [
      ...tail.map((it, i) => ({ ...it, _cloned: true, _cloneId: `tail-${i}` })),
      ...baseItems,
      ...head.map((it, i) => ({ ...it, _cloned: true, _cloneId: `head-${i}` })),
    ];
    setItems(full);
    setIndex(tail.length); // start at first real item
  }, [visible]);

  // compute stage width in px
  const stageWidth = items.length * (ITEM_W + GAP);

  // apply transform when index changes (with transition), then snap if in clones
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const x = index * (ITEM_W + GAP);
    el.style.transition = `all ${TRANS_MS}ms ease`;
    el.style.transform = `translate3d(${-x}px, 0, 0)`;
    transitioningRef.current = true;

    const tailLen = Math.max(visible, MIN_CLONES);
    const t = setTimeout(() => {
      transitioningRef.current = false;
      // if we moved into the appended head clones (past end)
      if (index >= items.length - tailLen) {
        // map back to corresponding real index
        const realIndex = tailLen + (index - (items.length - tailLen));
        el.style.transition = "none";
        el.style.transform = `translate3d(${-realIndex * (ITEM_W + GAP)}px, 0, 0)`;
        setIndex(realIndex);
      } else if (index < tailLen) {
        // moved into prepended tail clones -> map to corresponding real near end
        const realIndex = tailLen + ((index - tailLen + baseItems.length) % baseItems.length);
        el.style.transition = "none";
        el.style.transform = `translate3d(${-realIndex * (ITEM_W + GAP)}px, 0, 0)`;
        setIndex(realIndex);
      }
    }, TRANS_MS + 20);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, items]);

  // autoplay management
  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  function startAuto() {
    stopAuto();
    autoRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, AUTO_MS);
  }
  function stopAuto() {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  }

  // prev/next handlers (step one)
  function prev() {
    if (transitioningRef.current) return;
    stopAuto();
    setIndex((i) => i - 1);
    startAuto();
  }
  function next() {
    if (transitioningRef.current) return;
    stopAuto();
    setIndex((i) => i + 1);
    startAuto();
  }

  // basic swipe/drag support
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0;
    let curX = 0;
    let dragging = false;

    const onStart = (clientX) => {
      stopAuto();
      dragging = true;
      startX = clientX;
      el.style.transition = "none";
    };
    const onMove = (clientX) => {
      if (!dragging) return;
      curX = clientX;
      const dx = curX - startX;
      const base = -(index * (ITEM_W + GAP));
      el.style.transform = `translate3d(${base + dx}px, 0, 0)`;
    };
    const onEnd = () => {
      if (!dragging) return;
      dragging = false;
      const dx = curX - startX;
      if (Math.abs(dx) > ITEM_W * 0.25) {
        if (dx < 0) setIndex((i) => i + 1);
        else setIndex((i) => i - 1);
      } else {
        // snap back
        el.style.transition = `all ${TRANS_MS}ms ease`;
        el.style.transform = `translate3d(${-index * (ITEM_W + GAP)}px, 0, 0)`;
      }
      startAuto();
    };

    function touchStart(e) { onStart(e.touches[0].clientX); }
    function touchMove(e) { onMove(e.touches[0].clientX); }
    function touchEnd() { onEnd(); }

    function mouseDown(e) {
      onStart(e.clientX);
      const onMouseMove = (ev) => onMove(ev.clientX);
      const onMouseUp = (ev) => {
        onEnd();
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }

    el.addEventListener("touchstart", touchStart, { passive: true });
    el.addEventListener("touchmove", touchMove, { passive: true });
    el.addEventListener("touchend", touchEnd, { passive: true });
    el.addEventListener("mousedown", mouseDown);

    return () => {
      el.removeEventListener("touchstart", touchStart);
      el.removeEventListener("touchmove", touchMove);
      el.removeEventListener("touchend", touchEnd);
      el.removeEventListener("mousedown", mouseDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, items]);

  // ensure track has proper inline width & initial translate on mount
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.style.width = stageWidth ? `${stageWidth}px` : "0px";
    el.style.transform = `translate3d(${-index * (ITEM_W + GAP)}px, 0, 0)`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stageWidth, index]);

  // RENDER
  return (
    <section className="py-16" style={{ background: "#eaf6ef" }}>
      <div className="mx-auto px-6" style={{ maxWidth: "1240px" /* IMPORTANT: tuned for 1240px */ }}>
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#0b2b52] mb-8">HEALTH BENEFITS</h2>

        <div className="relative">
          {/* Prev/Next visible on large screens, you can remove hidden to show always */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="hidden lg:flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow z-40"
            style={{ border: "1px solid rgba(0,0,0,0.06)" }}
          >
            ‹
          </button>

          <button
            onClick={next}
            aria-label="Next"
            className="hidden lg:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow z-40"
            style={{ border: "1px solid rgba(0,0,0,0.06)" }}
          >
            ›
          </button>

          <div className="overflow-hidden" style={{ padding: "20px 28px" }}>
            {/* TRACK (owl stage style) */}
            <div
              ref={trackRef}
              className="owl-stage"
              style={{
                display: "flex",
                alignItems: "flex-start",
                width: stageWidth ? `${stageWidth}px` : "0px",
                transform: `translate3d(${-index * (ITEM_W + GAP)}px, 0, 0)`,
                transition: `all ${TRANS_MS}ms ease`,
                height: `${ITEM_W + 110}px`,
              }}
            >
              {items.map((it, i) => (
                <div
                  key={`${i}-${it._cloneId || it.id}`}
                  className="owl-item"
                  style={{
                    width: `${ITEM_W}px`,
                    marginRight: `${GAP}px`,
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="item text-center" style={{ width: `${ITEM_W}px` }}>
                    <div
                      style={{
                        width: `${ITEM_W - 40}px`,
                        height: `${ITEM_W - 40}px`,
                        borderRadius: "50%",
                        margin: "0 auto",
                        background: "linear-gradient(180deg, #FFE7B3 0%, #FFDDAA 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 14px 36px rgba(8,52,139,0.06)",
                        position: "relative",
                        border: "4px dashed rgba(200,140,40,0.25)",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={it.img}
                        alt={it.bold}
                        style={{ width: "62%", height: "62%", objectFit: "contain" }}
                        onError={(e) => {
                          e.currentTarget.src = "/images/placeholder.png";
                        }}
                      />
                    </div>

                    <div className="content mt-4">
                      <p style={{ color: "#6b7280", margin: 0 }}>{it.small}</p>
                      <p style={{ fontWeight: 700, color: "#1f2937", margin: 0 }}>{it.bold}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* helpful text below */}
        <div className="mt-6 text-center text-sm text-gray-600">Swipe on mobile or use arrows on desktop to navigate.</div>

        {/* small debug (hidden by default) - remove or show for debugging */}
        <div style={{ display: "none" }}>
          <div>stage transform: translate3d({-index * (ITEM_W + GAP)}px, 0px, 0px)</div>
          <div>stage width: {stageWidth}px</div>
        </div>
      </div>
    </section>
  );
}
