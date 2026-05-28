// Icon library - centralized icon imports for tree-shaking
import {
  Play, Check, X, ArrowRight, ChevronDown, Zap, Shield, Globe, TrendingUp, Users, FileText, Building2, Heart, Truck, Scale, Calculator, Star, Quote, Phone, MessageCircle, MapPin, Receipt, User, ShoppingCart, FilePen, CreditCard, Landmark, BarChart2, Wrench, Upload, ScanLine, Tag, Brain, Eye, Download, BookOpen, FileBarChart, GraduationCap, Video, Rocket, Bot
} from "lucide-react";

export const icons = {
  Play, Check, X, ArrowRight, ChevronDown, Zap, Shield, Globe, TrendingUp, Users, FileText, Building2, Heart, Truck, Scale, Calculator, Star, Quote, Phone, MessageCircle, MapPin, Receipt, User, ShoppingCart, FilePen, CreditCard, Landmark, BarChart2, Wrench, Upload, ScanLine, Tag, Brain, Eye, Download, BookOpen, FileBarChart, GraduationCap, Video, Rocket, Bot
};

// Dynamic icon loader for lazy loading
export async function getIcon(name: keyof typeof icons) {
  return icons[name];
}
