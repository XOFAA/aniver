"use client"

import React, { useEffect, useMemo, useState } from "react"
import { Calendar, Clock, Crown, Gift, MapPin, MessageCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function BirthdayInvitation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Paleta baseada no #53ECEC (turquesa)
  const PRIMARY = "#53ECEC"
  const PRIMARY_DARK = "#0AA6AE"
  const PRIMARY_SOFT = "#CFFBFB"
  const ACCENT_CORAL = "#FF8FB1"
  const ACCENT_LILAC = "#BFA6FF"
  const GOLD_SOFT = "#FFE8A3"
  const TEXT_DARK = "#0F172A"
  const TEXT_MID = "#334155"

  // Playfair vem do layout como --font-display
  const displayFont = useMemo(() => ({ fontFamily: "var(--font-display)" as const }), [])

  if (!mounted) return null

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animations (CSS) */}
      <style jsx global>{`
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes sparkleRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes crownBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.55; filter: blur(28px); }
          50% { opacity: 0.9; filter: blur(34px); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        @keyframes fadeScale {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes photoReveal {
          0% { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }

        .anim-fade-up { animation: fadeUp 700ms ease-out both; }
        .anim-fade-scale { animation: fadeScale 700ms ease-out both; }
        .anim-photo { animation: photoReveal 750ms cubic-bezier(.2,.8,.2,1) both; }

        .anim-sparkle { animation: sparkleRotate 10s linear infinite; }
        .anim-crown { animation: crownBounce 1.3s ease-in-out infinite; }
        .anim-float { animation: floaty 3.5s ease-in-out infinite; }
        .anim-glow { animation: pulseGlow 2.2s ease-in-out infinite; }

        /* Stagger helper */
        .stagger-1 { animation-delay: 80ms; }
        .stagger-2 { animation-delay: 160ms; }
        .stagger-3 { animation-delay: 240ms; }
        .stagger-4 { animation-delay: 320ms; }
      `}</style>

      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.png')" }}
      />
      {/* Overlay geral (contraste) */}
      <div className="absolute inset-0 -z-10 bg-white/30 backdrop-blur-[3px]" />
      {/* Vinheta */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.40)_45%,rgba(255,255,255,0.16)_78%)]" />

      {/* CTA fixo mobile */}
      <div className="fixed bottom-3 left-0 right-0 z-50 px-4 sm:hidden">
        <a href="https://wa.link/bct4k0" target="_blank" rel="noopener noreferrer" className="block">
          <Button
            className="w-full rounded-2xl py-6 text-lg font-extrabold shadow-2xl border-2"
            style={{
              backgroundImage: `linear-gradient(90deg, ${PRIMARY_DARK}, ${PRIMARY})`,
              borderColor: "rgba(255,255,255,0.85)",
              color: "white",
            }}
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            CONFIRMAR PRESENÇA
          </Button>
        </a>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pt-8 pb-28 sm:pb-12 sm:pt-12">
        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md anim-fade-up">
              <Sparkles className="w-4 h-4 anim-sparkle" style={{ color: ACCENT_CORAL }} />
              <span className="text-sm font-semibold" style={{ color: TEXT_MID }}>
                Convite oficial do Reino ✨
              </span>
            </div>

            <h1
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight anim-fade-scale stagger-1"
              style={{
                ...displayFont,
                color: TEXT_DARK,
                textShadow: "0 2px 18px rgba(255,255,255,0.95)",
              }}
            >
              Você está convidado(a) para o
              <span
                className="block mt-2 text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${PRIMARY_DARK}, ${ACCENT_LILAC}, ${ACCENT_CORAL})`,
                }}
              >
                aniversário da Mavie
              </span>
            </h1>

            <p
              className="mt-4 text-base sm:text-lg font-medium leading-relaxed anim-fade-up stagger-2"
              style={{ color: TEXT_MID }}
            >
              Um baile encantado para celebrar <b style={{ color: TEXT_DARK }}>2 aninhos</b> com muita magia, coroas e
              sorrisos. 💖
            </p>

    

            {/* CTA desktop */}
            <div className="mt-7 hidden sm:flex items-center gap-3 anim-fade-up stagger-4">
              <a href="https://wa.link/bct4k0" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="rounded-2xl px-8 py-7 text-lg font-extrabold shadow-2xl border-2"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${PRIMARY_DARK}, ${PRIMARY})`,
                    borderColor: "rgba(255,255,255,0.85)",
                    color: "white",
                  }}
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Confirmar presença
                </Button>
              </a>

              <div className="flex items-center gap-2">
                <Crown className="w-6 h-6 anim-crown" style={{ color: GOLD_SOFT }} />
                <span className="text-sm font-semibold" style={{ color: TEXT_MID }}>
                  Clique e confirme rapidinho no WhatsApp
                </span>
              </div>
            </div>
          </div>

          {/* Right: Foto circular (como antes) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[420px] anim-photo">
              {/* Glow */}
              <div
                className="absolute -inset-10 rounded-full opacity-70 anim-glow"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, ${PRIMARY_SOFT} 0%, rgba(255,255,255,0) 65%)`,
                }}
              />
              <div
                className="absolute -inset-6 rounded-full blur-3xl opacity-70 anim-glow"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${PRIMARY}55, ${ACCENT_LILAC}55, ${ACCENT_CORAL}55)`,
                }}
              />

              {/* Foto */}
              <div className="relative mx-auto w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px]">
                <div
                  className="absolute inset-0 rounded-full border-8 shadow-2xl bg-white"
                  style={{ borderColor: "rgba(255,255,255,0.92)" }}
                />
                <div className="absolute inset-[10px] rounded-full overflow-hidden">
                  <Image src="/mavie-foto.jpg" alt="Mavie" fill className="object-cover" priority />
                </div>

                {/* Ícones animados (como antes) */}
                <Crown
                  className="absolute -top-6 -right-5 w-16 h-16 sm:w-20 sm:h-20 drop-shadow-2xl anim-crown"
                  style={{ color: GOLD_SOFT }}
                />
                <Sparkles
                  className="absolute -bottom-5 -left-5 w-14 h-14 sm:w-16 sm:h-16 drop-shadow-xl anim-sparkle"
                  style={{ color: ACCENT_CORAL }}
                />
              </div>

              {/* Badges (flutuando de leve) */}
              <div className="mt-6 flex items-center justify-center gap-3 anim-float">
                <Badge text="✨ Baile encantado" tone={PRIMARY_SOFT} color={TEXT_DARK} />
                <Badge text="👑 Princesas & príncipes" tone={"rgba(255,232,163,0.45)"} color={TEXT_DARK} />
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="mt-10 grid lg:grid-cols-3 gap-6">
          {/* Detalhes do evento */}
          <Card className="rounded-3xl border bg-white/80 backdrop-blur-md shadow-xl overflow-hidden anim-fade-up">
            <div
              className="h-2 w-full"
              style={{ backgroundImage: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT_LILAC}, ${ACCENT_CORAL})` }}
            />
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ ...displayFont, color: TEXT_DARK }}>
              Grande Baile
              </h2>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <DetailCard
                  title="Data"
                  value="24 de Janeiro"
                  subtitle="Sábado"
                  icon={<Calendar className="w-6 h-6" style={{ color: PRIMARY_DARK }} />}
                  bg={`linear-gradient(135deg, rgba(83,236,236,0.16), rgba(255,255,255,0.60))`}
                  border={PRIMARY_SOFT}
                  textDark={TEXT_DARK}
                  textMid={TEXT_MID}
                />
                <DetailCard
                  title="Horário"
                  value="18:00"
                  subtitle="Chegue a tempo da magia ✨"
                  icon={<Clock className="w-6 h-6" style={{ color: ACCENT_LILAC }} />}
                  bg={`linear-gradient(135deg, rgba(191,166,255,0.16), rgba(255,255,255,0.60))`}
                  border={"rgba(191,166,255,0.35)"}
                  textDark={TEXT_DARK}
                  textMid={TEXT_MID}
                />
                <a href="https://maps.app.goo.gl/jRMHCh7ZA4hKaeQ78" target="_blank" rel="noopener noreferrer">
                  <DetailCard
                    title="Local"
                    value="Alphaville 4"
                    subtitle="Ponta Negra • abrir mapa"
                    icon={<MapPin className="w-6 h-6" style={{ color: ACCENT_CORAL }} />}
                    bg={`linear-gradient(135deg, rgba(255,143,177,0.16), rgba(255,255,255,0.60))`}
                    border={"rgba(255,143,177,0.35)"}
                    textDark={TEXT_DARK}
                    textMid={TEXT_MID}
                    clickable
                  />
                </a>
              </div>

              <div className="mt-6 rounded-2xl border bg-white/60 p-4 sm:p-5">
                <p className="text-sm sm:text-base font-semibold" style={{ color: TEXT_MID }}>
                  📍 <span style={{ color: TEXT_DARK }}>Endereço:</span> Salão de Festas Condomínio Alphaville 4 —
                  Ponta Negra
                </p>
              </div>
            </div>
          </Card>

          {/* Presentes */}
          <Card className="rounded-3xl border bg-white/80 backdrop-blur-md shadow-xl overflow-hidden anim-fade-up">
            <div
              className="h-2 w-full"
              style={{ backgroundImage: `linear-gradient(90deg, ${ACCENT_CORAL}, ${ACCENT_LILAC}, ${PRIMARY})` }}
            />
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ ...displayFont, color: TEXT_DARK }}>
                  Presentes
                </h2>
                <Gift className="w-7 h-7 anim-float" style={{ color: ACCENT_LILAC }} />
              </div>

              <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed" style={{ color: TEXT_MID }}>
                Sua presença é o mais importante 💝 — mas se quiser trazer algo, aqui vão sugestões:
              </p>

              <div className="mt-5 space-y-3">
                <GiftRow emoji="👗" title="Roupas" desc="Tam 2 anos / 3 anos" accent={ACCENT_CORAL} textMid={TEXT_MID} />
                <GiftRow
                  emoji="🍼"
                  title="Fraldas"
                  desc="Pampers Premium Care XG"
                  accent={PRIMARY_DARK}
                  textMid={TEXT_MID}
                />
                <GiftRow
                  emoji="💳"
                  title="Cartão presente"
                  desc="Renner / Riachuelo / Carter’s / RI Happy / JM Baby Store"
                  accent={ACCENT_LILAC}
                  textMid={TEXT_MID}
                />
              </div>

              <div
                className="mt-6 rounded-2xl border p-4 text-center font-extrabold anim-fade-scale"
                style={{
                  borderColor: "rgba(83,236,236,0.35)",
                  background: "rgba(207,251,251,0.35)",
                  color: TEXT_DARK,
                }}
              >
                💝 Sua presença é o nosso maior presente!
              </div>
            </div>
          </Card>
        </section>

        {/* Rodapé */}
        <footer className="mt-10 sm:mt-12 text-center anim-fade-up">
          <div className="flex items-center justify-center gap-2">
            <Crown className="w-6 h-6 anim-crown" style={{ color: GOLD_SOFT }} />
            <span className="text-sm sm:text-base font-semibold" style={{ color: TEXT_MID }}>
              Esperamos você para esse momento especial ✨
            </span>
            <Sparkles className="w-5 h-5 anim-sparkle" style={{ color: ACCENT_CORAL }} />
          </div>
        </footer>
      </div>
    </main>
  )
}

/* ---------- UI helpers ---------- */

function InfoPill({
  icon,
  label,
  value,
  accent,
  textDark,
  textMid,
  clickable,
}: {
  icon: React.ReactNode
  label: string
  value: string
  accent: string
  textDark: string
  textMid: string
  clickable?: boolean
}) {
  return (
    <div
      className={`rounded-2xl border bg-white/78 backdrop-blur-md px-4 py-3 shadow-sm ${
        clickable ? "hover:shadow-md hover:-translate-y-0.5 transition-all" : ""
      }`}
      style={{ borderColor: "rgba(255,255,255,0.75)" }}
    >
      <div className="flex items-center gap-3">
        <div className="grid place-items-center w-9 h-9 rounded-xl" style={{ background: accent }}>
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide" style={{ color: textMid }}>
            {label}
          </p>
          <p className="text-sm font-extrabold truncate" style={{ color: textDark }}>
            {value}
          </p>
        </div>
      </div>
    </div>
  )
}

function DetailCard({
  title,
  value,
  subtitle,
  icon,
  bg,
  border,
  textDark,
  textMid,
  clickable,
}: {
  title: string
  value: string
  subtitle: string
  icon: React.ReactNode
  bg: string
  border: string
  textDark: string
  textMid: string
  clickable?: boolean
}) {
  return (
    <div
      className={`rounded-3xl border p-5 shadow-sm ${
        clickable ? "hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer" : ""
      }`}
      style={{ backgroundImage: bg, borderColor: border }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold" style={{ color: textMid }}>
            {title}
          </p>
          <p className="text-xl font-extrabold mt-1" style={{ color: textDark }}>
            {value}
          </p>
          <p className="text-sm font-semibold mt-1" style={{ color: textMid }}>
            {subtitle}
          </p>
        </div>
        <div className="grid place-items-center w-10 h-10 rounded-2xl bg-white/60">{icon}</div>
      </div>
    </div>
  )
}

function GiftRow({
  emoji,
  title,
  desc,
  accent,
  textMid,
}: {
  emoji: string
  title: string
  desc: string
  accent: string
  textMid: string
}) {
  return (
    <div
      className="rounded-2xl border bg-white/75 backdrop-blur-md p-4 hover:shadow-md transition-all"
      style={{ borderColor: "rgba(255,255,255,0.75)" }}
    >
      <div className="flex items-start gap-3">
        <div className="text-2xl leading-none">{emoji}</div>
        <div className="min-w-0">
          <p className="text-base font-extrabold" style={{ color: accent }}>
            {title}
          </p>
          <p className="text-sm font-semibold leading-relaxed" style={{ color: textMid }}>
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

function Badge({ text, tone, color }: { text: string; tone: string; color: string }) {
  return (
    <span
      className="rounded-full px-3 py-1 text-xs font-extrabold border shadow-sm"
      style={{ background: tone, color, borderColor: "rgba(255,255,255,0.75)" }}
    >
      {text}
    </span>
  )
}
