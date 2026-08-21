"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Upload,
} from "lucide-react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/data/portfolio";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Order & Contact
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Submit Your Case
          </h2>
          <p className="mt-4 text-muted-foreground">
            Upload scan files or reach out directly via WhatsApp / Telegram for large file transfers.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact form */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Quick Order Form</CardTitle>
              <CardDescription>
                Fill in case details and attach your scan files. For files over 50 MB, use the messaging links below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Request Received!</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thank you for your submission. Dina will review your case and respond within 30 minutes during business hours.
                  </p>
                  <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                    Submit Another Case
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Dr. John Smith" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clinic">Clinic / Lab Name</Label>
                      <Input id="clinic" placeholder="Smile Dental Lab" required />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@clinic.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 555 000 0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="case-type">Case Type</Label>
                    <Input id="case-type" placeholder="e.g. Single crown #14, Zirconia" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Case Notes & Instructions</Label>
                    <Textarea
                      id="notes"
                      placeholder="Shade, material, occlusal preferences, implant system, etc."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file">Attach Scan Files</Label>
                    <div className="relative">
                      <Input
                        id="file"
                        type="file"
                        accept=".stl,.ply,.obj,.zip,.7z"
                        className="cursor-pointer"
                        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                      />
                      {fileName && (
                        <p className="mt-1 text-xs text-muted-foreground">Selected: {fileName}</p>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Accepted: STL, PLY, OBJ, ZIP · Max 50 MB via form
                    </p>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Upload className="mr-2 h-4 w-4" />
                    Submit for Test Design
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact info sidebar */}
          <div className="space-y-4 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Direct Messaging</CardTitle>
                <CardDescription>For large scan files and urgent cases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start gap-3">
                  <Link href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="h-5 w-5 text-green-600" />
                    WhatsApp Business
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start gap-3">
                  <Link href={contactInfo.telegram} target="_blank" rel="noopener noreferrer">
                    <FaTelegram className="h-5 w-5 text-sky-500" />
                    Telegram
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <a href={`mailto:${contactInfo.email}`} className="text-sm text-muted-foreground hover:text-primary">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <a href={`tel:${contactInfo.phone}`} className="text-sm text-muted-foreground hover:text-primary">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <p className="text-sm text-muted-foreground">{contactInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Working Hours</div>
                    <p className="text-sm text-muted-foreground">{contactInfo.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex items-start gap-3 p-4">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium">Free Test Design</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    New partners receive one complimentary test case to evaluate design quality and fit accuracy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
