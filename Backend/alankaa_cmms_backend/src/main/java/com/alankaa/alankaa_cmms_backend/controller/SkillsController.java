package com.alankaa.alankaa_cmms_backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alankaa.alankaa_cmms_backend.dto.SkillsDto;
import com.alankaa.alankaa_cmms_backend.service.SkillsService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/skills")
public class SkillsController {

    private SkillsService skillsService;

    @PostMapping
    public ResponseEntity<SkillsDto> createSkills(@RequestBody SkillsDto skillsDto) {
        SkillsDto savedSkills = skillsService.createSkill(skillsDto);
        return new ResponseEntity<>(savedSkills, HttpStatus.CREATED);
    }

    @GetMapping("/{skillsId}")
    public ResponseEntity<SkillsDto> getSkillsById(@PathVariable Long skillsId) {
        SkillsDto skillsDto = skillsService.getSkillById(skillsId);
        return ResponseEntity.ok(skillsDto);
    }

    @GetMapping
    public ResponseEntity<List<SkillsDto>> getAllSkills() {
        List<SkillsDto> skillsList = skillsService.getAllSkills();
        return ResponseEntity.ok(skillsList);
    }

    @PutMapping("/{skillsId}")
    public ResponseEntity<SkillsDto> updateSkills(@PathVariable Long skillsId,
                                                  @RequestBody SkillsDto updatedSkills) {
        SkillsDto skillsDto = skillsService.updateSkill(skillsId, updatedSkills);
        return ResponseEntity.ok(skillsDto);
    }

    @DeleteMapping("/{skillsId}")
    public ResponseEntity<String> deleteSkills(@PathVariable Long skillsId) {
        skillsService.deleteSkill(skillsId);
        return ResponseEntity.ok("Skills deleted successfully!");
    }
}
