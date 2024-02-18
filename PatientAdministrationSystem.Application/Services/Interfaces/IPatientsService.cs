using PatientAdministrationSystem.Application.Entities;

namespace PatientAdministrationSystem.Application.Interfaces;

public interface IPatientsService
{
    ICollection<PatientEntity> FindAll(string? search);
    PatientEntity? FindOne(Guid patientId);
    ICollection<VisitEntity> FindVisitsByPatient(Guid patientId);
}